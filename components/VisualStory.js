const items=[
  ['01','Evidence provenance','Original source, version, derivative and verification relationship remain visible.','provenance'],
  ['02','Entity & relationship mapping','People, organisations, events, systems and evidence can be considered together.','entity'],
  ['03','Chronology reconstruction','Fragmented records are arranged into a traceable sequence with gaps and conflicts retained.','chronology'],
  ['04','Geospatial context','Location relationships and movement are reviewed without turning the work into surveillance theatre.','geo'],
  ['05','Digital evidence','Files, metadata, messages, records and technical traces are handled with provenance and limitations visible.','digital'],
  ['06','Human + AI challenge','AI can organise, compare and propose alternatives. A human reviewer remains responsible for judgement.','human-ai'],
  ['07','Executive briefing','Complex evidence is converted into a clear, board-readable account of findings, uncertainty and action.','board'],
  ['08','Monitoring & assurance','Patterns, exceptions, blind spots and material change are reviewed through controlled thresholds.','monitoring'],
  ['09','Verification discipline','VERA records what was verified, against which evidence, by whom and at what stage.','verification'],
  ['10','Reporting output','The final output separates evidence, analysis, limitations, decisions and required action.','reporting'],
];

export default function VisualStory(){
  return <section className="section visual-story">
    <div className="section-head editorial-head">
      <div><div className="eyebrow">VISUAL EVIDENCE STORY</div><h2>See the work, not a cyber-security cliché.</h2></div>
      <p>Ten consistent visual scenes show how evidence moves from fragmented material to a structured, challenged and human-approved output.</p>
    </div>
    <div className="visual-story-grid">
      {items.map(([n,title,copy,visual])=><article className="story-card" key={n}>
        <div className={`story-image shot shot-${visual}`} aria-hidden="true"><div className="photo-wash"></div><div className="story-overlay"><span>{n}</span><small>ORVIA SECURITY &amp; INTELLIGENCE</small></div></div>
        <div className="story-copy"><span>{n}</span><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </div>
  </section>
}
