import Link from 'next/link';

const links = [
  ['Intelligence','/intelligence'],
  ['Investigations','/investigations'],
  ['Digital Evidence & OSINT','/digital-evidence-osint'],
  ['Monitoring & Risk','/monitoring-risk'],
  ['IRIS Technology','/iris-intelligence'],
  ['Reports','/reports'],
  ['Governance','/about-governance'],
];

export default function Header(){
  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand" href="/" aria-label="ORVIA Security & Intelligence home">
        <span className="mark" aria-hidden="true"><i>O</i><i>R</i><i>V</i><i>I</i><i>A</i></span>
        <span className="brand-copy"><strong>ORVIA</strong><small>SECURITY &amp; INTELLIGENCE</small></span>
      </Link>
      <nav>{links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="btn btn-primary btn-small" href="/contact">Start a Review</Link>
    </div>
  </header>
}
