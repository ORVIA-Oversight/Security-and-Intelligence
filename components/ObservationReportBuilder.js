'use client';

import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {WORKSTREAMS,OBSERVATION_STATES,makeObservationReport} from '../lib/investigationRuntime';

function lines(value){
  return value.split('\n').map(x=>x.trim()).filter(Boolean);
}

export default function ObservationReportBuilder(){
  const [matterRef,setMatterRef]=useState('');
  const [workOrderRef,setWorkOrderRef]=useState('');
  const [workstreamId,setWorkstreamId]=useState(WORKSTREAMS[0].id);
  const [tool,setTool]=useState(WORKSTREAMS[0].tools[0]);
  const [toolVersion,setToolVersion]=useState('');
  const [scope,setScope]=useState('');
  const [sourcesReceived,setSourcesReceived]=useState('');
  const [sourcesNotReceived,setSourcesNotReceived]=useState('');
  const [observations,setObservations]=useState('');
  const [contrary,setContrary]=useState('');
  const [limitations,setLimitations]=useState('');
  const [unresolved,setUnresolved]=useState('');
  const [sourceRefs,setSourceRefs]=useState('');
  const [report,setReport]=useState(null);
  const stream=useMemo(()=>WORKSTREAMS.find(x=>x.id===workstreamId)||WORKSTREAMS[0],[workstreamId]);

  useEffect(()=>{
    try{
      const raw=localStorage.getItem('orvia_si_last_work_order');
      if(!raw) return;
      const packet=JSON.parse(raw);
      setMatterRef(packet.matterRef||'');
      setWorkOrderRef(packet.workOrderRef||'');
      setScope(packet.requirement||'');
    }catch{}
  },[]);

  useEffect(()=>{setTool(stream.tools[0]||'');},[stream]);

  function generate(){
    const obs=lines(observations).map((statement,index)=>({
      observationId:'OBS-'+String(index+1).padStart(3,'0'),
      state:'INDEPENDENTLY OBSERVED',
      statement,
      requiresInterpretation:true
    }));
    const next=makeObservationReport({
      matterRef,workOrderRef,workstreamId,tool,toolVersion,scope,
      sourcesReceived:lines(sourcesReceived),
      sourcesNotReceived:lines(sourcesNotReceived),
      observations:obs,
      contraryObservations:lines(contrary),
      limitations:lines(limitations),
      unresolvedQuestions:lines(unresolved),
      sourceReferences:lines(sourceRefs)
    });
    setReport(next);
    try{localStorage.setItem('orvia_si_last_observation_report',JSON.stringify(next));}catch{}
  }

  function download(){
    if(!report) return;
    const blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=(report.reportRef||'orvia-si-report')+'.json';a.click();
    URL.revokeObjectURL(url);
  }

  return <div className="report-builder-shell">
    <header className="report-builder-head">
      <div><small>ORVIA SECURITY &amp; INTELLIGENCE</small><h1>Observation Report Builder</h1><p>Separate specialist observations from downstream interpretation. This report is the controlled handoff unit back to main ORVIA.</p></div>
      <Link href="/workspace">← Investigation workspace</Link>
    </header>

    <section className="report-boundary">
      <b>OBSERVATION BOUNDARY</b>
      <span>This builder records what the specialist workstream observed, its provenance, contrary material, limitations and unresolved questions. It does not determine guilt, liability, motive, safeguarding outcome or legal breach.</span>
    </section>

    <div className="report-builder-grid">
      <section className="report-form">
        <div className="report-form-row">
          <label>Matter reference<input value={matterRef} onChange={e=>setMatterRef(e.target.value)}/></label>
          <label>Work order reference<input value={workOrderRef} onChange={e=>setWorkOrderRef(e.target.value)}/></label>
        </div>
        <div className="report-form-row">
          <label>Workstream<select value={workstreamId} onChange={e=>setWorkstreamId(e.target.value)}>{WORKSTREAMS.map(x=><option key={x.id} value={x.id}>{x.id} · {x.name}</option>)}</select></label>
          <label>Tool<select value={tool} onChange={e=>setTool(e.target.value)}>{stream.tools.map(x=><option key={x}>{x}</option>)}</select></label>
        </div>
        <label>Tool version<input value={toolVersion} onChange={e=>setToolVersion(e.target.value)} placeholder="Record exact version when known"/></label>
        <label>Scope<textarea value={scope} onChange={e=>setScope(e.target.value)}/></label>
        <label>Sources received <small>One per line</small><textarea value={sourcesReceived} onChange={e=>setSourcesReceived(e.target.value)}/></label>
        <label>Sources not received <small>One per line</small><textarea value={sourcesNotReceived} onChange={e=>setSourcesNotReceived(e.target.value)}/></label>
        <label>Observations <small>One factual observation per line</small><textarea value={observations} onChange={e=>setObservations(e.target.value)} placeholder="Example: File metadata records LastModifiedBy = X on 21 July 2026."/></label>
        <label>Contrary observations <small>One per line</small><textarea value={contrary} onChange={e=>setContrary(e.target.value)}/></label>
        <label>Limitations <small>One per line</small><textarea value={limitations} onChange={e=>setLimitations(e.target.value)}/></label>
        <label>Unresolved technical questions <small>One per line</small><textarea value={unresolved} onChange={e=>setUnresolved(e.target.value)}/></label>
        <label>Source references / hashes <small>One per line</small><textarea value={sourceRefs} onChange={e=>setSourceRefs(e.target.value)}/></label>
        <button className="report-generate" onClick={generate}>Generate controlled observation report</button>
      </section>

      <aside className="report-preview">
        <small>WORKSTREAM OUTPUT</small>
        <h2>{stream.report}</h2>
        {!report?<p>Complete the examination fields and generate the report. Nothing is handed to main ORVIA until the report exists and specialist QA is complete.</p>:<>
          <div className="report-preview-meta"><b>{report.reportRef}</b><span>{report.matterRef}</span><span>{report.workOrderRef}</span></div>
          <div className="report-stat"><b>{report.observations.length}</b><span>observations</span></div>
          <div className="report-stat"><b>{report.limitations.length}</b><span>limitations</span></div>
          <div className="report-stat"><b>{report.unresolvedQuestions.length}</b><span>unresolved questions</span></div>
          <div className="report-status"><b>QA</b><span>{report.qaStatus}</span><b>HANDOFF</b><span>{report.handoffStatus}</span></div>
          <div className="report-actions"><button onClick={()=>navigator.clipboard?.writeText(JSON.stringify(report,null,2))}>Copy JSON</button><button onClick={download}>Download JSON</button></div>
        </>}
        <div className="report-state-key"><b>Allowed observation states</b>{OBSERVATION_STATES.map(x=><span key={x}>{x}</span>)}</div>
      </aside>
    </div>
  </div>;
}
