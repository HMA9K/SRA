"""Prepare metadata-free copies of original SRA exam PDFs; never change sources."""
from pathlib import Path
import hashlib,json
from pypdf import PdfReader,PdfWriter
from pypdf.generic import NameObject
ROOT=Path(__file__).resolve().parents[1]
def build():
 manifest={};proof=[]
 for folder in sorted((ROOT/'bronnen/tentamens').iterdir()):
  if not folder.is_dir():continue
  entry={'date':folder.name[:4]+'-'+folder.name[4:6]+'-'+folder.name[6:],'questions':{},'solutions':{}}
  for kind,name in [('questions','opgaven'),('solutions','uitwerking')]:
   source=folder/(name+'.pdf')
   if not source.exists():entry[kind]={'url':None,'reason':'Het oorspronkelijke document is niet beschikbaar.'};continue
   reader=PdfReader(source);writer=PdfWriter();writer.clone_document_from_reader(reader);writer.metadata=None;writer.root_object.pop('/Metadata',None)
   for page in writer.pages:
    page.pop('/Metadata',None)
    for annotation in page.get('/Annots',[]):
     annotation.get_object().pop('/T',None)
   output=ROOT/'bronnen/original-pdfs'/folder.name/(name+'.pdf');output.parent.mkdir(parents=True,exist_ok=True)
   with output.open('wb') as f:writer.write(f)
   clean=PdfReader(output);assert not clean.metadata
   assert len(clean.pages)==len(reader.pages)
   for old,new in zip(reader.pages,clean.pages):
    assert old.mediabox==new.mediabox
    assert old.extract_text()==new.extract_text()
    assert old.get_contents().get_data()==new.get_contents().get_data()
   entry[kind]={'url':output.relative_to(ROOT).as_posix(),'title':name,'pages':len(clean.pages),'sha256':hashlib.sha256(output.read_bytes()).hexdigest()}
   proof.append({'file':entry[kind]['url'],'pages':len(clean.pages),'metadataRemoved':True,'pageContentEqual':True,'textEqual':True})
  manifest[folder.name]=entry
 (ROOT/'data/exam-original-pdfs.js').write_text('window.SRAOriginalPdfs = '+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
 (ROOT/'data/exam-original-pdfs.mjs').write_text('export const originalPdfs = '+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
 (ROOT/'docs/original-pdfs-validation.json').write_text(json.dumps(proof,indent=2)+'\n',encoding='utf-8')
 print(str(len(proof))+' originele PDF-kopieen gecontroleerd; paginainhoud en tekst behouden.')
if __name__=='__main__':build()
