import Link from 'next/link';
import PageHero from '../components/PageHero';
import InterfacePanel from '../components/InterfacePanel';
import VisualStory from '../components/VisualStory';
import {securityMedia} from '../lib/securityMedia';

const capabilities=[
  ['Intelligence','Define the question, assemble the information, test competing explanations and support a human decision.','Evidence used','Records, public sources, organisational information and authorised material.','You receive','A structured intelligence brief with gaps, limitations and provenance.','/intelligence'],
  ['Evidence & Verification','Preserve what exists, separate assertion from evidence and show what can actually be verified.','Evidence used','Originals, versions, derivatives, records, images, files and corroborating sources.','You receive','A controlled evidence account with contradictions, gaps and verification state.','/evidence-verification'],
  ['Digital & Technical Intelligence','Review digital artefacts and technical context without implying unauthorised access or covert intrusion.','Evidence used','Files, metadata, messages, public technical data, records and authorised system traces.','You receive','A technically grounded account with provenance and limitations visible.','/digital-technical-intelligence'],
  ['Investigative Support','Turn fragmented enquiries into a structured review with chronology, relationships and alternative hypotheses.','Evidence used','Case material, correspondence, records, statements, timelines and authorised digital evidence.','You receive','A defensible review pack designed for human challenge and decision-making.','/investigative-support']
];

export default function Home(){
  return <>
    <PageHero
      title={<>Evidence-led intelligence.<br/>Human judgement.<br/>Clear provenance.</>}
      image={securityMedia.intelligenceCommand}
      imageAlt="ORVIA Security & Intelligence analyst environment"
    >
      Structured intelligence, evidence verification and investigative support for organisations that need to understand what happened, what is missing and what can be verified.
    </PageHero>

    <section className="trust-strip">
      <span>Independent</span><span>Evidence-led</span><span>Human authority</span><span>Traceable provenance</span>
    </section>

    <section className="section editorial-split" id="how-it-works">
      <div>
        <div className="eyebrow">WHAT SECURITY &amp; INTELLIGENCE DOES</div>
        <h2>Start with the question. Keep the evidence visible.</h2>
      </div>
      <div className="editorial-copy">
        <p>ORVIA helps organisations structure complex information without allowing a search result, allegation, model output or isolated record to become a conclusion simply because it exists.</p>
        <p>We preserve provenance, expose contradictions, identify missing evidence, retain alternative explanations and make the human decision point explicit.</p>
      </div>
    </section>

    <section className="section process-band">
      <div className="process-kicker">THE ORVIA DISCIPLINE</div>
      <div className="process-line">
        {['QUESTION','COLLECT','PRESERVE','CORROBORATE','CHALLENGE','VERIFY','HUMAN REVIEW'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}
      </div>
    </section>

    <section className="section capability-section">
      <div className="section-head editorial-head">
        <div><div className="eyebrow">KEY CAPABILITIES</div><h2>Four routes into the same evidence discipline.</h2></div>
        <p>Each capability is designed around the problem, the evidence available and the decision a human needs to make.</p>
      </div>
      <div className="capability-editorial">
        {capabilities.map(([title,copy,l1,evidence,l2,output,href],i)=><article key={title} className="capability-row">
          <div className="capability-index">0{i+1}</div>
          <div><h3>{title}</h3><p>{copy}</p></div>
          <div className="capability-detail"><small>{l1}</small><p>{evidence}</p></div>
          <div className="capability-detail"><small>{l2}</small><p>{output}</p></div>
          <Link href={href} className="round-link" aria-label={`Explore ${title}`}>→</Link>
        </article>)}
      </div>
    </section>

    <section className="section iris-section">
      <div className="section-head editorial-head">
        <div><div className="eyebrow">IRIS INTELLIGENCE TECHNOLOGY</div><h2>One conductor. Every specialist layer accountable.</h2></div>
        <p>IRIS routes the work and holds context. HIVE preserves evidence and provenance. VITA challenges gaps and assumptions. Authorised humans review consequential conclusions. VERA records verification and sustained effectiveness.</p>
      </div>
      <InterfacePanel/>
    </section>

    <section className="architecture-band">
      <div className="architecture-inner">
        {[
          ['INPUT','Evidence · records · calls · documents · systems · forms · data'],
          ['IRIS','Routes work · holds context · tracks state'],
          ['HIVE','Originals · versions · provenance · assertions · dissent'],
          ['VITA','Challenge · blind spots · alternative hypotheses · completeness'],
          ['HUMAN REVIEW','Judgement · authority · accountability'],
          ['VERA','Verification · effectiveness · sustained check'],
          ['OUTPUT','Briefing · report · actions · assurance record']
        ].map(([a,b],i)=><div className="architecture-step" key={a}><span>{String(i+1).padStart(2,'0')}</span><div><strong>{a}</strong><p>{b}</p></div></div>)}
      </div>
    </section>

    <VisualStory/>

    <section className="section human-authority">
      <div className="human-copy">
        <div className="eyebrow">HUMAN AUTHORITY</div>
        <h2>Powerful technology. Explicit human responsibility.</h2>
        <p>AI supports analysis and preparation. Authorised humans retain judgement, authority and accountability.</p>
        <p>ORVIA does not make automated findings of guilt, safeguarding responsibility, clinical causation or legal liability.</p>
      </div>
      <div className="authority-card">
        <span>AI MAY SUPPORT</span>
        <ul><li>Search and organise</li><li>Compare sources</li><li>Identify gaps</li><li>Suggest alternatives</li><li>Assist verification</li></ul>
        <strong>No hidden scoring. No black-box finding. No “AI says so.”</strong>
      </div>
    </section>

    <section className="section use-cases">
      <div className="section-head editorial-head">
        <div><div className="eyebrow">USE CASES</div><h2>When fragmented information needs structure.</h2></div>
        <p>Examples are illustrative and remain subject to scope, lawful authority and appropriate professional boundaries.</p>
      </div>
      <div className="usecase-grid">
        {['Complex incident reconstruction','Corporate intelligence requirement','Evidence and chronology review','Digital evidence context','Supplier or issue monitoring','Board intelligence briefing'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
      </div>
    </section>

    <section className="section governance-panel">
      <div>
        <div className="eyebrow">GOVERNANCE</div>
        <h2>Capability with boundaries.</h2>
        <p>ORVIA is not police, a regulator, a court, a law firm or an intelligence agency. We do not conduct unlawful surveillance, provide unauthorised access to systems or replace regulated professional judgement.</p>
      </div>
      <Link href="/about-governance" className="btn btn-secondary">ABOUT &amp; GOVERNANCE</Link>
    </section>

    <section className="film-band">
      <div className="film-copy"><div className="eyebrow">EXPLAINER FILMS</div><h2>Two short films, staged for final media integration.</h2><p>The layout is reserved now so final approved films can be dropped in without redesigning the page.</p></div>
      <div className="film-grid">
        <article><span>FILM 01 · 10 SEC</span><h3>From fragmented evidence to structured intelligence</h3><p>Raw evidence → relationships → chronology → human review → intelligence output.</p><em>Media slot staged</em></article>
        <article><span>FILM 02 · 10 SEC</span><h3>Human judgement supported by ORVIA</h3><p>Analyst → IRIS → HIVE → VITA → VERA → human decision.</p><em>Media slot staged</em></article>
      </div>
    </section>

    <section className="cta-band">
      <div><div className="eyebrow">START WITH THE QUESTION</div><h2>What do you need to understand?</h2><p>Tell us the decision the work needs to support. Controlled triage comes before evidence transfer.</p></div>
      <Link href="/contact" className="btn btn-light">REQUEST A REVIEW</Link>
    </section>
  </>
}
