"""Build auditable MC topic frequencies from local SRA exam records only."""
import argparse
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "data/mc-exam-frequency.js"


def read_js(path):
    raw = path.read_text(encoding="utf-8")
    return json.loads(raw[raw.index("{"):].rstrip(";\n\r "))


def build_payload(check_sources=False):
    mapping = json.loads((ROOT / "data/mc-exam-frequency-map.json").read_text(encoding="utf-8"))
    analysis = json.loads((ROOT / "data/exam-analysis.json").read_text(encoding="utf-8"))
    exams = read_js(ROOT / "data/exams.js")["exams"]
    mc = read_js(ROOT / "data/mc.js")["topics"]
    unique = [e for e in exams if not e.get("duplicateOf")]
    unique_ids = {e["id"] for e in unique}
    assert len(unique_ids) == len(unique), "Duplicate exam ID"
    assert set(mapping["topics"]) == {t["id"] for t in mc}, "Topic inventory changed"
    assert len(analysis["tentamens"]) == len(exams)
    for theme, expected in analysis["frequenties"].items():
        assert sum(bool(e["evidence"].get(theme)) for e in unique) == expected, theme
    for exam in exams:
        record = next(r for r in analysis["tentamens"] if r["datum"] == exam["date"])
        assert record["themas"] == exam["evidence"], (exam["id"], "Stale exam evidence")
        assert record.get("duplicateOf") == exam.get("duplicateOf")
    topics = {}
    for topic in mc:
        rule = mapping["topics"][topic["id"]]
        manual = rule.get("manual", {})
        assert set(manual) <= unique_ids, (topic["id"], "Unknown or duplicate exam")
        if not manual and not rule.get("sourceThemes"):
            topics[topic["id"]] = dict(status="not-counted", count=None, exams=[], note=rule["note"])
            continue
        occurrences = []
        for exam in unique:
            reasons = {}
            for theme in rule.get("sourceThemes", []):
                assert theme in analysis["frequenties"], theme
                for number in exam["evidence"][theme]:
                    reasons.setdefault(number, []).append(theme)
            if exam["id"] in manual:
                entry = manual[exam["id"]]
                for number in entry["questions"]:
                    reasons.setdefault(number, []).append(entry["reason"])
            if not reasons:
                continue
            evidence = []
            for number in sorted(reasons):
                question = next(q for q in exam["questions"] if q["number"] == number)
                page = question["page"]
                image = exam["documents"]["opgaven"][page - 1]
                if check_sources:
                    assert (ROOT / image).is_file(), image
                    assert (ROOT / "bronnen/tentamens" / exam["id"] / "opgaven.pdf").is_file(), exam["id"]
                evidence.append(dict(question=number, displayNumber=question["displayNumber"],
                                     page=page, source=exam["source"],
                                     href=f"bronnen/tentamens/{exam['id']}/opgaven.pdf#page={page}",
                                     image=image, reasons=reasons[number]))
            occurrences.append(dict(id=exam["id"], label=exam["date"], date=exam["date"],
                                    questions=sorted(reasons), evidence=evidence,
                                    href=evidence[0]["href"]))
        topics[topic["id"]] = dict(status="counted", count=len(occurrences), exams=occurrences,
                                    note=rule["scope"])
    duplicates = [dict(id=e["id"], date=e["date"], duplicateOf=e["duplicateOf"])
                  for e in exams if e.get("duplicateOf")]
    source_paths = ["data/exam-analysis.json", "data/exams.js", "data/mc-exam-frequency-map.json"]
    return dict(version=1, reviewed=mapping["reviewed"], examCount=len(unique),
                examLabel="unieke tentamens", administrationCount=len(exams),
                method=mapping["method"],
                duplicateNote="Maart en juni 2020 bevatten dezelfde vragen en tellen eenmaal.",
                duplicates=duplicates,
                sources=[dict(path=p, sha256=hashlib.sha256((ROOT / p).read_bytes()).hexdigest())
                         for p in source_paths], topics=topics)


def serialize(payload):
    return ("/* Gegenereerd met scripts/build_mc_exam_frequency.py; bronkoppelingen in data/mc-exam-frequency-map.json. */\n"
            + "window.SRAMCExamFrequency = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n")


def build(check_sources=False):
    payload = build_payload(check_sources=check_sources)
    DEST.write_text(serialize(payload), encoding="utf-8")
    return payload


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check output without changing files")
    parser.add_argument("--sources", action="store_true", help="Also verify local source images and PDFs exist")
    args = parser.parse_args()
    payload = build_payload(check_sources=args.sources)
    content = serialize(payload)
    if args.check:
        assert DEST.read_text(encoding="utf-8") == content, "Rebuild data/mc-exam-frequency.js"
    else:
        DEST.write_text(content, encoding="utf-8")
    counted = sum(t["status"] == "counted" for t in payload["topics"].values())
    print(f"{len(payload['topics'])} topics; {counted} counted; {payload['examCount']} unique exams.")


if __name__ == "__main__":
    main()
