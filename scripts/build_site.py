"""Maak een publiceerbaar SRA-pakket met alle gebruikte bronbestanden.

Alleen websitebestanden worden gekopieerd; werkbestanden, Git en tools blijven lokaal.
"""
from pathlib import Path
import hashlib
import json
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'output' / 'site'


def build():
    files = [ROOT / name for name in ('index.html', '404.html',
             'SRA interactieve samenvatting.html', 'SRA leesversie.html')]
    for folder in ('assets', 'css', 'data', 'js', 'vendor', 'bronnen'):
        files.extend(path for path in (ROOT / folder).rglob('*') if path.is_file())
    paths = {path.relative_to(ROOT).as_posix() for path in files}
    for name in ('data/exams.js', 'data/cirrus-exams.js'):
        text = (ROOT / name).read_text(encoding='utf-8')
        refs = re.findall(r'bronnen/[A-Za-z0-9_./-]+\.(?:jpg|png|pdf)', text)
        missing = set(refs) - paths
        if missing:
            raise ValueError('Ontbrekende tentamenbronnen: ' + ', '.join(sorted(missing)))
    course = (ROOT / 'data/course.js').read_text(encoding='utf-8')
    data = json.loads(course.split('window.SRA = ', 1)[1].rstrip(';\n'))
    for source in data['sources'].values():
        pdf = ROOT / 'bronnen' / source['file']
        if not pdf.is_file() or pdf.read_bytes()[:5] != b'%PDF-':
            raise ValueError('Ontbrekend of ongeldig bronbestand: ' + str(pdf))
    # Ruim alleen verouderde bestanden binnen de vaste uitvoermap op.
    # Lege mappen mogen blijven: OneDrive kan hun verwijdering tijdelijk blokkeren.
    if TARGET.resolve() != ROOT.resolve() / 'output' / 'site':
        raise ValueError('Onverwachte uitvoermap')
    if TARGET.exists():
        for old in TARGET.rglob('*'):
            if old.is_file() and old.relative_to(TARGET).as_posix() not in paths:
                old.unlink()
    for source in files:
        target = TARGET / source.relative_to(ROOT)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    # Nieuwe HTML mag nooit met oude scripts of stijlen uit de browsercache laden.
    # Bronpaden blijven stabiel; alleen een inhoudsgebonden versieparameter wisselt.
    for name in ('index.html', '404.html'):
        page = TARGET / name
        def asset_version(match):
            relative = match.group(2)
            asset = TARGET / relative
            if not asset.is_file():
                raise ValueError('Ontbrekende pagina-asset: ' + relative)
            version = hashlib.sha256(asset.read_bytes()).hexdigest()[:12]
            return f'{match.group(1)}="{relative}?v={version}"'
        page.write_text(re.sub(r'(src|href)="((?:css|js|data|vendor)/[^"?]+\.(?:css|js))"',
                               asset_version, page.read_text(encoding='utf-8')), encoding='utf-8')
    print(f'Websitepakket: {TARGET}')
    print(f'{len(files)} bestanden; alle opgaven, bronuitsneden en uitwerkingen aanwezig.')


if __name__ == '__main__':
    build()
