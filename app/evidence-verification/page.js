import PageHero from '../../components/PageHero';

export const metadata={
  title:'Evidence & Verification',
  description:'Evidence provenance, chronology, corroboration, contradictions, missing evidence and verification from ORVIA Security & Intelligence.',
  alternates:{canonical:'/evidence-verification'}
};

export default function Page(){const items=[
['Provenance','Show where material came from, when it was obtained and how it has been handled.'],
['Source control','Separate originals, derivatives, summaries and assertions rather than flattening them into one narrative.'],
['Versioning','Preserve change history where material evolves over time.'],
['Chronology','Place events into a traceable sequence linked back to supporting material.'],
['Corroboration','Compare material across independent sources before relying on it.'],
['Contradictions','Keep conflicts visible instead of smoothing them out.'],
['Missing evidence','Record what should exist, what has not been obtained and why the gap matters.'],
['Verification','Record what was verified, against which evidence, by whom and at what stage.']
];return <>
<PageHero title="Evidence should remain traceable all the way to the decision." visual="provenance">Preserve provenance, separate assertion from evidence and show what can actually be verified.</PageHero>
<section className="section"><div className="section-head editorial-head"><div><div className="eyebrow">EVIDENCE DISCIPLINE</div><h2>Make the evidential position visible.</h2></div><p>ORVIA avoids simplistic truth scoring. Evidence states describe status and uncertainty; they do not assign guilt, culpability or personal risk scores.</p></div><div className="simple-grid">{items.map(([a,b])=><div key={a} style={{display:'block'}}><h3>{a}</h3><p style={{color:'#627084',fontWeight:400}}>{b}</p></div>)}</div></section>
<section className="section process-band"><div className="process-kicker">CONTROLLED STATES</div><div className="state-row">{['Observed','Unverified','Verified','Contradicted','Missing','Disputed','Reopened','Closed'].map(x=><span key={x}>{x}</span>)}</div></section>
<section className="section human-authority"><div className="human-copy"><div className="eyebrow">VERA</div><h2>Verification is an accountable act.</h2><p>VERA records what was verified, against which evidence, by whom, when, and what stage was reached.</p></div><div className="authority-card"><span>VERIFICATION LADDER</span><ul><li>Implemented</li><li>Verified</li><li>Effective</li><li>Sustained</li></ul><strong>Verification does not remove uncertainty. It makes the basis of confidence visible.</strong></div></section>
</>}