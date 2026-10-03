'use client';

import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {INVESTIGATION_PRODUCTS,LOCAL_CONDUCTOR} from '../lib/investigationProducts';
import {makeWorkOrder} from '../lib/investigationRuntime';

export default function InvestigationWorkspace(){
  const [selected,setSelected]=useState(INVESTIGATION_PRODUCTS[0].id);
  const [workOrder,setWorkOrder]=useState('');
  const [matterRef,setMatterRef]=useState('');
  const [lastPacket,setLastPacket]=useState(null);
  const [allocated,setAllocated]=useState([]);
  const [notice,setNotice]=useState('No specialist work order has been allocated yet.');
  const [questionSelection,setQuestionSelection]=useState([]);
  const product=useMemo(()=>INVESTIGATION_PRODUCTS.find(x=>x.id===selected)||INVESTIGATION_PRODUCTS[0],[selected]);

  useEffect(()=>{
    try{
      const raw=localStorage.getItem('orvia_si_question_selection');
      const ids=raw?JSON.parse(raw):[];
      if(Array.isArray(ids)) setQuestionSelection(ids);
    }catch{}
  },[]);

  function allocate(){
    const clean=workOrder.trim();
    if(!clean){
      setNotice('Add a bounded investigation requirement before allocation.');
      return;
    }
    if(!allocated.includes(product.id)) setAllocated([...allocated,product.id]);
    const packet=makeWorkOrder({matterRef,requirement:clean,product,questionIds:questionSelection});
    setLastPacket(packet);
    try{localStorage.setItem('orvia_si_last_work_order',JSON.stringify(packet));}catch{}
    setNotice(product.name+' allocated as '+packet.workOrderRef+' with '+questionSelection.length+' selected evidence-review questions. Specialist tool execution remains separately controlled.');
  }

  return <div className="si-workspace">
    <aside className="si-rail">
      <div className="si-rail-brand">
        <span>ORVIA</span>
        <strong>SECURITY &amp; INTELLIGENCE</strong>
        <small>INVESTIGATION WORKSPACE</small>
      </div>
      <div className="si-conductor-mark">
        <small>LOCAL CONDUCTOR</small>
        <b>{LOCAL_CONDUCTOR.name}</b>
        <span>Separate from main IRIS</span>
      </div>
      <nav>
        {INVESTIGATION_PRODUCTS.map(p=><button key={p.id} className={selected===p.id?'active':''} onClick={()=>setSelected(p.id)}>
          <span className={'si-dot '+p.accent}></span>
          <span><b>{p.name}</b><small>{p.code}</small></span>
        </button>)}
      </nav>
      <Link className="si-bank-link" href="/workspace/bank">
        <b>MASTER CORE 500</b>
        <span>Open evidence challenge bank →</span>
      </Link>
      <div className="si-rail-footer">
        <b>MAIN ORVIA HANDOFF</b>
        <span>Completed reports only</span>
      </div>
    </aside>

    <section className="si-main">
      <header className="si-topbar">
        <div>
          <small>SECURITY &amp; INTELLIGENCE · SPECIALIST SYSTEM</small>
          <h1>Independent investigation workspace</h1>
        </div>
        <span className="si-boundary">LOCAL STATE · CONTROLLED HANDOFF</span>
      </header>

      <div className="si-banner">
        <div><b>{LOCAL_CONDUCTOR.label}</b><p>{LOCAL_CONDUCTOR.boundary}</p></div>
        <div><b>Master review standard</b><p>Use the Master Core 500 and mandatory controls to define what each workstream must examine before handoff.</p><Link className="si-inline-link" href="/workspace/bank">Review and select questions →</Link></div>
      </div>

      <div className="si-layout">
        <div className="si-product-panel">
          <div className="si-panel-head">
            <div><small>{product.code}</small><h2>{product.name}</h2></div>
            <span>{allocated.includes(product.id)?'ALLOCATED':'AVAILABLE'}</span>
          </div>
          <p className="si-summary">{product.summary}</p>

          <div className="si-detail-grid">
            <article>
              <small>WORKSTREAMS</small>
              {product.workstreams.map(x=><div className="si-line" key={x}><span></span><b>{x}</b></div>)}
            </article>
            <article>
              <small>SPECIALIST TOOLS</small>
              {product.tools.map(x=><div className="si-line" key={x}><span></span><b>{x}</b></div>)}
            </article>
          </div>

          <div className="si-report-card">
            <small>SEPARATE OUTPUT</small>
            <b>{product.report}</b>
            <p>Observations remain separate until the Security &amp; Intelligence handoff package is complete.</p>
          </div>

          <Link className="si-link" href={product.href}>Open product page →</Link>
        </div>

        <div className="si-conductor-panel">
          <div className="si-conductor-head">
            <div><small>{LOCAL_CONDUCTOR.name}</small><h2>Allocate the work</h2></div>
            <span>HUMAN AUTHORITY ACTIVE</span>
          </div>
          <p>Give this specialist system a bounded requirement. The local conductor allocates the selected product and its workstreams; it does not make the final case finding.</p>
          <div className="si-question-attach"><div><small>MASTER 500 SELECTION</small><b>{questionSelection.length} questions attached</b></div><Link href="/workspace/bank">Review selection →</Link></div>
          <label>Matter reference</label>
          <input className="si-text-input" value={matterRef} onChange={e=>setMatterRef(e.target.value)} placeholder="Example: ORV-REV-KENSA-001"/>
          <label>Investigation requirement</label>
          <textarea value={workOrder} onChange={e=>setWorkOrder(e.target.value)} placeholder="Example: Examine the supplied SAR bundle for document provenance, chronology anomalies, deleted or purged artefacts and independent public-source corroboration. Report observations only."/>
          <div className="si-actions">
            <button onClick={allocate}>Allocate to {product.name}</button>
            <button className="secondary" onClick={()=>{setWorkOrder('');setNotice('Requirement cleared.')}}>Clear</button>
          </div>
          <div className="si-notice"><b>STATE</b><span>{notice}</span></div>
          {lastPacket&&<div className="si-packet"><small>WORK ORDER PACKET</small><b>{lastPacket.workOrderRef}</b><p>{lastPacket.matterRef} · {lastPacket.product.name} · {lastPacket.questionIds.length} questions</p><div><button onClick={()=>navigator.clipboard?.writeText(JSON.stringify(lastPacket,null,2))}>Copy JSON</button><Link href="/workspace/report">Open observation report builder →</Link></div></div>}
        </div>
      </div>

      <section className="si-products">
        <div className="si-section-head"><div><small>ALL SPECIALIST PRODUCTS</small><h2>Separate capabilities. One local conductor.</h2></div><p>Each product runs as its own specialist lane and produces its own report before anything is returned to main ORVIA.</p></div>
        <div className="si-product-grid">
          {INVESTIGATION_PRODUCTS.map(p=><article key={p.id}>
            <div className={'si-product-accent '+p.accent}></div>
            <small>{p.code}</small>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div className="si-card-meta"><b>Output</b><span>{p.report}</span></div>
            <button onClick={()=>setSelected(p.id)}>Open in workspace</button>
          </article>)}
        </div>
      </section>

      <section className="si-handoff">
        <small>CONTROLLED RETURN TO MAIN ORVIA</small>
        <h2>Specialist observations go back as reports, not shared reasoning.</h2>
        <div className="si-handoff-flow">
          {['Specialist products','Separate observation reports','S&I QA','Handoff package','Main IRIS import','Three Sides & legal review'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b></div>)}
        </div>
      </section>
    </section>
  </div>
}
