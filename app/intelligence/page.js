import PageHero from '../../components/PageHero';

export const metadata={
  title:'Intelligence',
  description:'Structured intelligence built around a defined requirement, with relationships, hypotheses, gaps, provenance and human decision support visible.',
  alternates:{canonical:'/intelligence'}
};

export default function Page(){const services=['Corporate intelligence','Operational intelligence','Reputational intelligence','Strategic intelligence','Adverse-media research','Public-record research','Entity mapping','Relationship analysis','Market intelligence','Competitor intelligence','Location and context intelligence','Intelligence gap analysis'];return <>
<PageHero title="Make the question clear before collecting the answer." visual="entity">Good intelligence begins with a requirement: what needs to be understood, why it matters and what decision it will support.</PageHero>
<section className="section editorial-split"><div><div className="eyebrow">INTELLIGENCE REQUIREMENT</div><h2>Define the decision before collecting the material.</h2></div><div className="editorial-copy"><p>ORVIA structures information around a clear requirement, tests relationships and patterns, retains alternative explanations, identifies gaps and separates evidence from analysis.</p><p>The objective is not to create more information. It is to produce a traceable account that a human decision-maker can understand, challenge and use.</p></div></section>
<section className="section"><div className="simple-grid">{services.map(x=><div key={x}>{x}</div>)}</div></section>
<section className="section process-band"><div className="process-kicker">METHOD</div><div className="process-line">{['Define','Map','Collect','Preserve','Correlate','Challenge','Human review'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></section>
</>}