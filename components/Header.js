import Link from 'next/link';

const links = [
  ['What We Do','/what-we-do'],
  ['Intelligence','/intelligence'],
  ['Evidence & Verification','/evidence-verification'],
  ['Digital & Technical Intelligence','/digital-technical-intelligence'],
  ['Investigative Support','/investigative-support'],
  ['IRIS Intelligence Technology','/iris-intelligence'],
  ['About & Governance','/about-governance'],
];

export default function Header(){
  return <>
    <div className="utility-bar">
      <div className="utility-inner">
        <span>ORVIA Oversight Ltd</span>
        <span>Evidence-led assurance</span>
        <a href="tel:03300433703">0330 043 3703</a>
      </div>
    </div>
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="ORVIA Security & Intelligence home">
          <span className="wordmark" aria-hidden="true">
            <b>O</b><b>R</b><b>V</b><b>I</b><b>A</b>
          </span>
          <span className="brand-copy">
            <strong>SECURITY &amp; INTELLIGENCE</strong>
            <small>AN ORVIA OVERSIGHT CAPABILITY</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="btn btn-primary btn-small desktop-cta" href="/contact">Request a Review</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-nav">
            <Link href="/">Home</Link>
            {links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
          </div>
        </details>
      </div>
    </header>
  </>
}
