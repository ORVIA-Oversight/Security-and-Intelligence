import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata={
  title:'What We Do',
  description:'Structured intelligence, evidence verification, digital and technical intelligence, and investigative support from ORVIA Security & Intelligence.',
  alternates:{canonical:'/what-we-do'}
};

const routes=[
  ['Intelligence','Understand a defined question through structured information synthesis, relationship analysis, competing explanations and evidence gaps.','/intelligence'],
  ['Evidence & Verification','Preserve provenance, control versions, compare sources, surface contradictions and record what has actually been verified.','/evidence-verification'],
  ['Digital & Technical Intelligence','Review digital artefacts, metadata, records, communications and authorised technical context without implying unauthorised access.','/digital-technical-intelligence'],
  ['Investigative Support','Structure complex reviews through chronology, entity mapping, evidence matrices, alternative hypotheses and red-team challenge.','/investigative-support']
];

export default function Page(){return <>
  <PageHero title="Understand the question. Structure the evidence. Keep the human decision visible." visual="board">
    ORVIA Security & Intelligence combines structured intelligence, evidence verification, digital and technical review, and investigative support inside one governed evidence discipline.
  </PageHero>
  <section className="section editorial-split"><div><div className="eyebrow">ONE CAPABILITY SYSTEM</div><h2>Different problems. The same evidence discipline.</h2></div><div className="editorial-copy"><p>Every route begins with scope, lawful authority and the decision the work needs to support.</p><p>IRIS coordinates the work. HIVE preserves evidence and provenance. VITA challenges assumptions and gaps. Authorised humans review consequential conclusions. VERA records verification and sustained effectiveness.</p></div></section>
  <section className="section capability-section"><div className="capability-editorial">{routes.map(([t,c,h],i)=><article className="capability-row" key={t}><div className="capability-index">0{i+1}</div><div><h3>{t}</h3><p>{c}</p></div><div className="capability-detail"><small>Human output</small><p>A traceable briefing, review or evidence account with limitations and provenance visible.</p></div><div className="capability-detail"><small>Boundary</small><p>No statutory powers, automated culpability finding or unauthorised access.</p></div><Link href={h} className="round-link">→</Link></article>)}</div></section>
  <section className="cta-band"><div><div className="eyebrow">START WITH SCOPE</div><h2>Tell us what you need to understand.</h2></div><Link href="/contact" className="btn btn-light">REQUEST A REVIEW</Link></section>
</>}