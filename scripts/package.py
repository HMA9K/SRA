"""Build portable HTML and ZIP, optionally without private course sources."""
from pathlib import Path
import argparse
import html
import json
import shutil
import zipfile
import hashlib
import re
import build_content

root = Path(__file__).resolve().parents[1]
workspace = root.parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--without-sources', action='store_true',
                    help='Bouw zonder lokale bron-PDF\'s en maak een aparte ZIP zonder bronbestanden.')
args = parser.parse_args()

# Controleer alle bronpaden voordat bestaande uitvoer wordt gewijzigd.
source_paths = []
for source in build_content.sources.values():
    source_file = Path(source['file'])
    original = Path(source['original'])
    if (source_file.name != str(source_file) or source_file.suffix.lower() != '.pdf'
            or original.is_absolute() or '..' in original.parts):
        parser.error('Ongeldig bronpad: ' + source['file'])
    source_paths.append((workspace / original, root / 'bronnen' / source_file))
if not args.without_sources:
    missing = [str(original.relative_to(workspace)) for original, _ in source_paths if not original.is_file()]
    if missing:
        parser.error('Bronbestanden ontbreken: ' + ', '.join(missing)
                     + '. Gebruik --without-sources voor een clone zonder de lokale cursus-PDF\'s.')

payload = dict(lessons=build_content.lessons, sources=build_content.sources,
               glossary=build_content.glossary, examCases=build_content.exam_cases)
(root/'data').mkdir(exist_ok=True)
(root/'data/course.js').write_text('window.SRA = '+json.dumps(payload,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
if not args.without_sources:
    (root/'bronnen').mkdir(exist_ok=True)
    for original, destination in source_paths:
        shutil.copy2(original, destination)

manifest=json.loads((root/'vendor/study-ui/manifest.json').read_text(encoding='utf-8'))
for name in ('tokens.css','shell.css'):
    actual=hashlib.sha256((root/'vendor/study-ui'/name).read_bytes()).hexdigest()
    if actual!=manifest['files'][name]['sha256']:
        raise ValueError('De gedeelde layout is gewijzigd buiten het bronpakket. Voer scripts/sync_layout.py uit.')
base=(root/'index.html').read_text(encoding='utf-8')
portable=base
for name in re.findall(r'<link rel="stylesheet" href="([^"]+)">',base):
    path=(root/name).resolve()
    if not path.is_relative_to(root):
        raise ValueError('Stylesheet staat buiten de app: '+name)
    portable=portable.replace(f'<link rel="stylesheet" href="{name}">','<style>\n'+path.read_text(encoding='utf-8')+'\n</style>')
presentation_css=(root/'css/presentation.css').read_text(encoding='utf-8')
for name in ['data/course.js','js/math.js','js/labs.js','js/app.js']:
    script=(root/name).read_text(encoding='utf-8').replace('</script','<\\/script')
    portable=portable.replace(f'<script defer src="{name}"></script>','')
    portable=portable.replace('</body>',f'<script>\n{script}\n</script>\n</body>')
portable = re.sub(r'(?m)^[ \t]+$', '', portable)
(root/'SRA interactieve samenvatting.html').write_text(portable,encoding='utf-8')

e=html.escape
parts=['<!doctype html><html lang="nl"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>SRA · Leesversie</title><style>body{max-width:900px;margin:35px auto;padding:0 20px;font:17px/1.65 Arial;color:#242431}h1,h2{color:#444159}h2{margin-top:38px}a{color:#006c47}table{border-collapse:collapse;width:100%;font-size:15px}td,th{border:1px solid #ddd;padding:10px;text-align:left}th{background:#f0f1f6}.formula{padding:15px;background:#f0f3fa;overflow-wrap:anywhere}details{margin:15px 0;padding:12px;border:1px solid #ddd}summary{cursor:pointer}article{border-top:2px solid #008859;margin-top:45px}.note{padding:12px;background:#fff6ea}@media(max-width:600px){table{display:block;overflow-x:auto}body{font-size:16px}}@media print{details{break-inside:avoid}}</style><h1>SRA · Zelfstandige leesversie</h1><p>Alle uitleg, voorbeelden en begripchecks zonder scripts. Open antwoorden met de uitklapknop. Voor interactieve rekenbladen en voortgang gebruik je <a href="SRA interactieve samenvatting.html">de interactieve versie</a>.</p><ol>']
for l in build_content.lessons:parts.append(f'<li><a href="#{l["id"]}">{e(l["title"])}</a></li>')
parts.append('</ol>')
for i,l in enumerate(build_content.lessons):
    parts.append(f'<article id="{l["id"]}"><h2>{i+1}. {e(l["title"])}</h2><p>{e(l["intro"])}</p>')
    for s in l['sections']:parts.append(f'<h3>{e(s["title"])}</h3>{s["html"]}')
    parts.append(f'<h3>{e(l["example"]["title"])}</h3><ol>')
    parts.extend('<li>'+e(s)+'</li>' for s in l['example']['steps'])
    parts.append('</ol><h3>Hier gaat het vaak mis</h3><ul>')
    parts.extend('<li>'+e(s)+'</li>' for s in l['pitfalls'])
    parts.append('</ul><h3>Check je begrip</h3>')
    for q in l['questions']:
        parts.append('<p><strong>'+e(q['prompt'])+'</strong></p><ol type="A">'+''.join('<li>'+e(o)+'</li>' for o in q['options'])+'</ol><details><summary>Antwoord en uitleg</summary><p>'+e(q['options'][q['correct']])+'. '+e(q['explanation'])+'</p></details>')
    parts.append('<h3>Bronnen</h3><ul>')
    for ref in l['refs']:
        s=build_content.sources[ref['source']]
        parts.append(f'<li><a href="bronnen/{s["file"]}#page={ref["page"]}">{e(s["title"])}</a>: {e(ref["locator"])}</li>')
    parts.append('</ul></article>')
parts.append('<style>'+presentation_css+'</style></html>')
(root/'SRA leesversie.html').write_text('\n'.join(parts),encoding='utf-8')

output=workspace/'output';output.mkdir(exist_ok=True)
zip_name = 'SRA interactieve samenvatting zonder bronbestanden.zip' if args.without_sources else 'SRA interactieve samenvatting.zip'
with zipfile.ZipFile(output/zip_name,'w',zipfile.ZIP_DEFLATED) as z:
    for p in root.rglob('*'):
        relative = p.relative_to(root)
        if not p.is_file() or any(x in relative.parts for x in ['__pycache__','.git','tmp','node_modules']):
            continue
        if args.without_sources and (relative.parts[0] == 'bronnen' or p.suffix.lower() == '.pdf'):
            continue
        z.write(p,Path('SRA')/relative)
print(f'{len(build_content.lessons)} lessen, {sum(len(l["questions"]) for l in build_content.lessons)} checks, {len(build_content.exam_cases)} tentamenroutes')
print('Modulaire website, zelfstandige HTML, leesversie en ZIP gereed.')
if args.without_sources:
    print('Bron-PDF\'s zijn niet opgenomen. Bronverwijzingen blijven beschikbaar voor eigen lokale exemplaren.')
print('ZIP: ' + str(output / zip_name))
