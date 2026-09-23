"""Synchroniseer een lokale study-ui release; gebruik --check in de bouwcontrole."""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import re
import sys

APP_ROOT = Path(__file__).resolve().parents[1]
ASSETS = ("tokens.css", "shell.css", "header.css", "theme.css", "theme.js")
MANIFEST_NAME = "manifest.json"


def source_release(source: Path) -> tuple[dict[str, bytes], dict]:
    """Lees de volledige release voordat de bestemming gewijzigd wordt."""
    source = source.resolve(strict=True)
    package = json.loads((source / "package.json").read_text(encoding="utf-8"))
    provenance = json.loads((source / "provenance.json").read_text(encoding="utf-8"))
    version = package.get("version", "")
    if package.get("name") != "@hma9k/study-ui":
        raise ValueError("De bron is geen @hma9k/study-ui pakket.")
    if not re.fullmatch(r"\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?", version):
        raise ValueError("package.json bevat geen geldige releaseversie.")
    if provenance.get("version") != version or provenance.get("package") != package["name"]:
        raise ValueError("Versie of pakketnaam in provenance.json komt niet overeen.")
    origin = provenance.get("source", {})
    commit = origin.get("commit", "")
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        raise ValueError("provenance.json moet een volledige broncommit bevatten.")
    if not origin.get("repository") or not origin.get("url"):
        raise ValueError("provenance.json mist de bronrepository of bron-URL.")
    files = {name: (source / name).read_bytes() for name in ASSETS}
    if not all(files.values()):
        raise ValueError("Een stylesheet is leeg; synchronisatie is gestopt.")
    manifest = {
        "schemaVersion": 1,
        "package": package["name"],
        "version": version,
        "sourceCommit": commit,
        "sourceRepository": origin["repository"],
        "sourceUrl": origin["url"],
        "files": {name: {"sha256": hashlib.sha256(data).hexdigest()} for name, data in files.items()},
    }
    return files, manifest


def synchronize(source: Path, destination: Path, *, check: bool = False) -> list[str]:
    """Geef afwijkingen terug; --check schrijft niets, ook geen ontbrekende map."""
    files, manifest = source_release(source)
    expected = {**files, MANIFEST_NAME: (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8")}
    differences = []
    for name, content in expected.items():
        target = destination / name
        if not target.is_file() or target.read_bytes() != content:
            differences.append(name)
    if not check and differences:
        destination.mkdir(parents=True, exist_ok=True)
        for name in differences:
            (destination / name).write_bytes(expected[name])
    return differences


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=APP_ROOT / "packages" / "study-ui",
                        help="Lokale map met de gewenste release (standaard packages/study-ui).")
    parser.add_argument("--check", action="store_true", help="Alleen controleren; code 1 bij verschil.")
    args = parser.parse_args(argv)
    try:
        differences = synchronize(args.source, APP_ROOT / "vendor" / "study-ui", check=args.check)
    except (OSError, ValueError, TypeError, AttributeError) as error:
        print(f"study-ui: {error}", file=sys.stderr)
        return 2
    if args.check and differences:
        print("study-ui wijkt af: " + ", ".join(differences), file=sys.stderr)
        print("Voer scripts/sync_layout.py met dezelfde --source uit.", file=sys.stderr)
        return 1
    print("study-ui: bron en distributie zijn gelijk." if not differences
          else "study-ui gesynchroniseerd: " + ", ".join(differences))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
