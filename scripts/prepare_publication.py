"""Build the complete site and preserve the existing hosted privacy integration."""
from pathlib import Path
import hashlib,os,subprocess,urllib.request
import build_site

ROOT=Path(__file__).resolve().parents[1]
BUILD_URL='https://leeromgeving-statistieken.pages.dev/privacy-build-20260928.cjs'
BUILD_SHA='639e5a7fca4501c8cabcd1294fc882d2b590c11d18a21457cf5047b03f56b03b'

def build():
 build_site.build()
 helper=ROOT/'tmp/privacy-build.cjs';helper.parent.mkdir(exist_ok=True)
 content=urllib.request.urlopen(urllib.request.Request(BUILD_URL,headers={'User-Agent':'Mozilla/5.0'}),timeout=30).read()
 if hashlib.sha256(content).hexdigest()!=BUILD_SHA:raise ValueError('De bestaande privacybouwstap is gewijzigd; eerst beoordelen.')
 helper.write_bytes(content)
 collector='<script src="https://leeromgeving-statistieken.pages.dev/collect.js?v=1"></script>'
 for page in (ROOT/'output/site').glob('*.html'):
  html=page.read_text(encoding='utf-8')
  if '<script data-goatcounter=' in html and collector not in html:
   page.write_text(html.replace('<script data-goatcounter=',collector+'<script data-goatcounter=',1),encoding='utf-8')
 env=os.environ.copy();env['STUDY_USAGE_BUILD_ROOT']='output/site'
 subprocess.run(['node',str(helper)],cwd=ROOT,env=env,check=True)
 print('Volledige publicatiemap met bestaande privacy-integratie gereed.')

if __name__=='__main__':build()
