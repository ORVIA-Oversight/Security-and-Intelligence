import {securityMedia} from '../lib/securityMedia';

const items=[
  ['01','Evidence provenance','Original source, version, derivative and verification relationship remain visible.',securityMedia.evidenceIntegrity],
  ['02','Entity & relationship mapping','People, organisations, events, systems and evidence can be considered together.',securityMedia.osintEntity],
  ['03','Chronology reconstruction','Fragmented records are arranged into a traceable sequence with gaps and conflicts retained.',securityMedia.chronology],
  ['04','Geospatial context','Location relationships and movement are reviewed without turning the work into surveillance theatre.',securityMedia.geospatial],
  ['05','Digital evidence','Files, metadata, messages, records and technical traces are handled with provenance and limitations visible.',securityMedia.digitalEvidence],
  ['06','Human + AI challenge','AI can organise, compare and propose alternatives. A human reviewer remains responsible for judgement.',securityMedia.challengeVerification],
  ['07','Executive briefing','Complex evidence is converted into a clear, board-readable account of findings, uncertainty and action.',securityMedia.intelligenceProducts],
  ['08','Monitoring & assurance','Patterns, exceptions, blind spots and material change are reviewed through controlled thresholds.',securityMedia.monitoring],
  ['09','Investigation workspace','IRIS holds context while HIVE, VITA and VERA preserve evidence, challenge and verification.',securityMedia.investigationWorkspace],
  ['10','Intelligence command','The final working environment brings evidence, context and human decision-making together.',securityMedia.intelligenceCommand],
];

export default function VisualStory(){
  return <section className="section visual-story">
    <div className="section-head editorial-head">
      <div><div className="eyebrow">VISUAL EVIDENCE STORY</div><h2>See the work, not a cyber-security cliché.</h2></div>
      <p>Ten consistent visual scenes show how evidence moves from fragmented material to a structured, challenged and human-approved output.</p>
    </div>
    <div className="visual-story-grid">
      {items.map(([n,title,copy,image])=><article className="story-card" key={n}>
        <div className="story-image shot" role="img" aria-label={title} style={{backgroundImage:`linear-gradient(180deg,rgba(250,247,242,.04),rgba(11,36,80,.08)),url("${image}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="story-overlay"><span>{n}</span><small>ORVIA SECURITY &amp; INTELLIGENCE</small></div>
        </div>
        <div className="story-copy"><span>{n}</span><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </div>
  </section>
}
