export default function InterfacePanel(){
  const states=['Observed','Unverified','Verified','Contradicted','Missing','Disputed','Reopened','Closed'];
  return <div className="iris-stage">
    <div className="iris-note">Illustrative interface</div>
    <div className="iris-shell">
      <aside className="iris-rail">
        <div className="iris-brand">IRIS</div>
        <p>Requirement</p><p>Evidence</p><p>Chronology</p><p>Entities</p><p>Hypotheses</p><p>Verification</p>
      </aside>
      <div className="iris-work">
        <div className="iris-head">
          <div>
            <small>INTELLIGENCE REQUIREMENT</small>
            <strong>Understand what happened, what is missing and what can be verified</strong>
          </div>
          <span>HUMAN AUTHORITY ACTIVE</span>
        </div>
        <div className="iris-grid">
          <div className="iris-panel iris-network">
            <label>Relationship view</label>
            <div className="network-canvas">
              <i className="node node-1"></i><i className="node node-2"></i><i className="node node-3"></i><i className="node node-4"></i><i className="node node-5"></i>
              <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
                <line x1="18" y1="20" x2="47" y2="13"/><line x1="47" y1="13" x2="73" y2="29"/>
                <line x1="47" y1="13" x2="39" y2="47"/><line x1="39" y1="47" x2="78" y2="48"/>
                <line x1="18" y1="20" x2="39" y2="47"/>
              </svg>
            </div>
          </div>
          <div className="iris-panel iris-timeline">
            <label>Chronology</label>
            <div className="timeline-track"><i></i><i></i><i></i><i></i><i></i></div>
            <p>Evidence-linked events with gaps and conflicts retained.</p>
          </div>
          <div className="iris-panel iris-states">
            <label>Evidence state</label>
            <div className="state-grid">{states.map((s,i)=><span key={s}><b>{s}</b><em>{[14,5,9,3,4,2,1,7][i]}</em></span>)}</div>
          </div>
          <div className="iris-panel iris-challenge">
            <label>VITA challenge</label>
            <strong>Alternative hypotheses retained</strong>
            <p>Contradictions, missing evidence and blind spots remain visible until human closure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
