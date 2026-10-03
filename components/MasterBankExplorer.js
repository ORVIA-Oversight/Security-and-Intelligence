'use client';

import {useMemo,useState} from 'react';
import {MANDATORY_CONTROLS,ORVIA_PRINCIPLES,THREE_SIDES} from '../lib/evidenceReviewStandard';

export default function MasterBankExplorer({bank}){
  const [query,setQuery]=useState('');
  const [module,setModule]=useState('all');
  const [principle,setPrinciple]=useState('all');
  const [side,setSide]=useState('all');
  const [selected,setSelected]=useState([]);

  const filtered=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return bank.questions.filter(item=>{
      if(module!=='all'&&String(item.moduleNumber)!==module) return false;
      if(principle!=='all'&&item.principle!==principle) return false;
      if(side!=='all'&&item.threeSides!==side) return false;
      if(!q) return true;
      return [
        item.id,item.question,item.moduleTitle,item.principle,item.threeSides,
        item.why,item.evidence,item.adverse,item.unanswered,item.applicable
      ].join(' ').toLowerCase().includes(q);
    });
  },[bank.questions,module,principle,side,query]);

  function toggle(id){
    setSelected(x=>x.includes(id)?x.filter(y=>y!==id):[...x,id]);
  }

  const selectedText=selected.join(', ');

  return <div className="bank-shell">
    <section className="bank-hero">
      <div>
        <small>ORVIA MASTER CORE 500 · IMPLEMENTATION BUILD</small>
        <h1>Universal Evidence Challenge Bank</h1>
        <p>Evidence-led questions for structured reviews using Observation · Reflection · Visibility · Insight · Accountability and the Three Sides Rule.</p>
      </div>
      <div className="bank-status">
        <div><b>{bank.importedQuestions}</b><span>questions imported</span></div>
        <div><b>{bank.importedModules}</b><span>modules imported</span></div>
        <div><b>7</b><span>mandatory controls</span></div>
      </div>
    </section>

    {bank.missingModules.length>0&&<section className="bank-warning">
      <b>IMPORT STATUS</b>
      <span>{bank.importedQuestions} of {bank.expectedQuestions} questions are currently loaded into this build. Missing modules: {bank.missingModules.map(x=>String(x).padStart(2,'0')).join(', ')}.</span>
    </section>}

    <section className="bank-controls-standard">
      <div className="bank-section-head">
        <div><small>MANDATORY CROSS-CUTTING CONTROLS</small><h2>Every material finding must survive these seven tests.</h2></div>
        <p>These are controls over the entire bank, not extra filler questions. They apply after evidence is gathered and before a material conclusion is released.</p>
      </div>
      <div className="bank-control-grid">
        {MANDATORY_CONTROLS.map((c,i)=><article key={c.id}>
          <span>{String(i+1).padStart(2,'0')}</span>
          <h3>{c.name}</h3>
          <p>{c.question}</p>
          <b>Required output</b>
          <p>{c.output}</p>
          <small>{c.rule}</small>
        </article>)}
      </div>
    </section>

    <section className="bank-browser">
      <div className="bank-section-head">
        <div><small>QUESTION BANK</small><h2>Search, filter and allocate questions.</h2></div>
        <p>Questions can later be activated by matter type and allocated to specialist Security & Intelligence workstreams or retained for the main ORVIA review.</p>
      </div>

      <div className="bank-filterbar">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search question, evidence type, issue or tag"/>
        <select value={module} onChange={e=>setModule(e.target.value)}>
          <option value="all">All imported modules</option>
          {bank.modules.map(m=><option key={m.moduleNumber} value={String(m.moduleNumber)}>Module {String(m.moduleNumber).padStart(2,'0')} · {m.moduleTitle}</option>)}
        </select>
        <select value={principle} onChange={e=>setPrinciple(e.target.value)}>
          <option value="all">All ORVIA principles</option>
          {ORVIA_PRINCIPLES.map(x=><option key={x}>{x}</option>)}
        </select>
        <select value={side} onChange={e=>setSide(e.target.value)}>
          <option value="all">All Three-Sides focus</option>
          <option>All Three</option>
          {THREE_SIDES.map(x=><option key={x}>{x}</option>)}
        </select>
      </div>

      <div className="bank-results-head">
        <span>{filtered.length} questions shown</span>
        <span>{selected.length} selected</span>
      </div>

      {selected.length>0&&<div className="bank-selection">
        <b>Selected question IDs</b>
        <textarea readOnly value={selectedText}/>
        <button onClick={()=>setSelected([])}>Clear selection</button>
      </div>}

      <div className="bank-question-list">
        {filtered.map(item=><article className={selected.includes(item.id)?'selected':''} key={item.id}>
          <div className="bank-question-top">
            <div><small>MODULE {String(item.moduleNumber).padStart(2,'0')} · {item.moduleTitle}</small><h3>{item.id} — {item.question}</h3></div>
            <button onClick={()=>toggle(item.id)}>{selected.includes(item.id)?'Selected':'Select'}</button>
          </div>
          <div className="bank-tags">
            <span>{item.principle}</span>
            <span>{item.threeSides}</span>
            <span>{item.applicable||'Universal'}</span>
          </div>
          <div className="bank-question-grid">
            <div><b>Why this matters</b><p>{item.why}</p></div>
            <div><b>Evidence to seek</b><p>{item.evidence}</p></div>
            <div><b>Adverse-evidence test</b><p>{item.adverse}</p></div>
            <div><b>If unanswered</b><p>{item.unanswered}</p></div>
          </div>
          <footer>Source: {item.sourceFile}</footer>
        </article>)}
      </div>
    </section>
  </div>
}
