"""Kopieer relevante bronpagina's zonder de oorspronkelijke PDF's te wijzigen."""
from pathlib import Path
from pypdf import PdfReader, PdfWriter
import hashlib,json
from course_completion import BOOK_PARTS

ROOT=Path(__file__).resolve().parents[1]
WORKSPACE=ROOT.parent
SET=WORKSPACE.parent/'2. Afgerond'/'Propedeuse'/'SET'

def main():
    target=ROOT/'source-excerpts'
    target.mkdir(exist_ok=True)
    book=PdfReader(WORKSPACE/'Volledige boek Statistiek_voor_audit_en_controlling.pdf')
    sets=PdfReader(SET/'Attentiepunten SET V23.pdf')
    manifest=[]
    for name,(first,last) in {**BOOK_PARTS,'set-basis':(3,7)}.items():
        reader=sets if name=='set-basis' else book
        writer=PdfWriter()
        for page in range(first,last+1): writer.add_page(reader.pages[page-1])
        writer.add_metadata({'/Title':f'{name}: oorspronkelijke PDF-pagina {first} t/m {last}'})
        path=target/(name+'.pdf')
        with path.open('wb') as output: writer.write(output)
        assert len(PdfReader(path).pages)==last-first+1
        assert path.stat().st_size < 25*1024*1024, f'Te groot voor publicatie: {path}'
        manifest.append(dict(file=path.name,firstOriginalPdfPage=first,lastOriginalPdfPage=last,
            pages=last-first+1,bytes=path.stat().st_size,sha256=hashlib.sha256(path.read_bytes()).hexdigest()))
    (ROOT/'docs/source-excerpts-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf8')
    print(f'{len(manifest)} bronuitsneden gecontroleerd; oorspronkelijke bestanden ongewijzigd.')

if __name__=='__main__': main()
