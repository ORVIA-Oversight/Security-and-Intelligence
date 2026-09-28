import Link from 'next/link';

export default function PageHero({
  eyebrow='ORVIA SECURITY & INTELLIGENCE',
  title,
  children,
  cta='REQUEST A REVIEW',
  secondary={label:'SEE HOW IT WORKS',href:'#how-it-works'},
  visual='hero'
}){
  return <section className="page-hero">
    <div className="hero-copy">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{children}</p>
      <p className="authority-line">AI supports the work. Authorised humans retain judgement, authority and accountability.</p>
      <div className="actions">
        <Link className="btn btn-primary" href="/contact">{cta}</Link>
        {secondary && <Link className="btn btn-secondary" href={secondary.href}>{secondary.label}</Link>}
      </div>
    </div>
    <div className={`hero-media shot shot-${visual}`} role="img" aria-label="Professional intelligence and evidence review environment">
      <div className="photo-wash"></div>
      <div className="evidence-screen screen-a">
        <small>ENTITY RELATIONSHIPS</small>
        <div className="network-mini"><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <div className="evidence-screen screen-b">
        <small>CHRONOLOGY</small>
        <div className="timeline-mini"><i></i><i></i><i></i><i></i></div>
      </div>
      <div className="evidence-screen screen-c">
        <small>VERIFICATION</small>
        <strong>Human review active</strong>
        <span>Provenance retained</span>
      </div>
      <div className="media-caption">Evidence • relationships • chronology • verification</div>
    </div>
  </section>
}
