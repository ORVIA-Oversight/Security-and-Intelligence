import fs from 'node:fs';
import path from 'node:path';

function field(block,label){
  const marker='**'+label+':**';
  const start=block.indexOf(marker);
  if(start<0) return '';
  const rest=block.slice(start+marker.length);
  const next=rest.indexOf('\n**');
  return (next>=0?rest.slice(0,next):rest).replace(/\n/g,' ').trim();
}

export function loadMasterBank(){
  const dir=path.join(process.cwd(),'data','master-bank');
  const modules=[];
  const missingModules=[];
  for(let i=1;i<=20;i++){
    const num=String(i).padStart(2,'0');
    const filename='module-'+num+'.md';
    const full=path.join(dir,filename);
    const splitA=path.join(dir,'module-'+num+'a.md');
    const splitB=path.join(dir,'module-'+num+'b.md');
    const splitC=path.join(dir,'module-'+num+'c.md');
    const splitD=path.join(dir,'module-'+num+'d.md');
    const splitE=path.join(dir,'module-'+num+'e.md');
    const splitF=path.join(dir,'module-'+num+'f.md');
    let text='';
    let sourceFile=filename;
    if(fs.existsSync(full)){
      text=fs.readFileSync(full,'utf8');
    }else if(fs.existsSync(splitA)&&fs.existsSync(splitB)){
      const parts=[splitA,splitB,splitC,splitD,splitE,splitF].filter(p=>fs.existsSync(p));
      text=parts.map(p=>fs.readFileSync(p,'utf8')).join('\n');
      sourceFile=parts.map(p=>path.basename(p)).join(' + ');
    }else{
      missingModules.push(i);
      continue;
    }
    const titleLine=text.split('\n').find(x=>x.startsWith('## MODULE '))||'';
    const title=titleLine.includes('—')?titleLine.split('—').slice(1).join('—').trim():titleLine;
    const chunks=text.split('\n### Q').slice(1);
    const questions=chunks.map(chunk=>{
      const block='Q'+chunk;
      const first=block.split('\n')[0];
      const dash=first.indexOf(' — ');
      return {
        id:dash>0?first.slice(0,dash).trim():'',
        question:dash>0?first.slice(dash+3).trim():first.trim(),
        moduleNumber:i,
        moduleTitle:title,
        principle:field(block,'ORVIA principle'),
        threeSides:field(block,'Three-Sides focus'),
        why:field(block,'Why this matters'),
        evidence:field(block,'Evidence to seek'),
        adverse:field(block,'Adverse-evidence test'),
        unanswered:field(block,'If unanswered'),
        applicable:field(block,'Applicable to'),
        sourceFile
      };
    });
    modules.push({moduleNumber:i,moduleTitle:title,questions,sourceFile});
  }
  const questions=modules.flatMap(x=>x.questions);
  return {
    version:'2.0-implementation',
    expectedQuestions:500,
    expectedModules:20,
    importedQuestions:questions.length,
    importedModules:modules.length,
    missingModules,
    modules,
    questions
  };
}
