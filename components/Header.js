import Link from 'next/link';

const links = [
  ['What We Do','/what-we-do'],
  ['Intelligence','/intelligence'],
  ['Evidence','/evidence-verification'],
  ['Digital & Technical','/digital-technical-intelligence'],
  ['Investigative Support','/investigative-support'],
  ['Governance','/about-governance'],
];

const estateGroups = [
  ['Human + Memory',[['MIA','https://mialegacy.uk']]],
  ['Communication',[['Voice','https://orviavoice.co.uk']]],
  ['Evidence + Decisions',[['Witness Room','https://witnessroom.co.uk'],['Threshold','https://threshold-review.co.uk'],['Insight','https://orviainsight.co.uk']]],
  ['Business',[['Web','https://orviaweb.co.uk'],['Business','https://orviabusiness.co.uk']]],
  ['Security + Operations',[['Security','https://orviasecurity.co.uk'],['Overwatch','https://orvia-overwatch.orvia.org.uk']]],
  ['Learning + Public Benefit',[['Foundation','https://orviafoundation.org.uk'],['Academy','https://academy.orvia.org.uk']]],
];

export default function Header(){
  return <>
    <div className="estate-lock"><div className="header-inner estate-lock-inner">
      <a className="estate-lock-brand" href="https://orvia.org.uk">ORVIA</a>
      <details className="estate-lock-menu"><summary>Explore ORVIA</summary><div className="estate-lock-mega">{estateGroups.map(([group,items])=><section key={group}><small>{group}</small>{items.map(([label,href])=><a key={href} href={href}>{label}</a>)}</section>)}</div></details>
      <a href="https://orvia.org.uk/about">About</a><a href="https://orvia.org.uk/trust">Trust</a>
      <span className="estate-lock-current">Security &amp; Intelligence</span>
    </div></div>
    <div className="utility-bar"><div className="utility-inner"><span>ORVIA Oversight Ltd</span><span>Evidence-led assurance</span><a href="tel:03300433703">0330 043 3703</a></div></div>
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/" aria-label="ORVIA Security & Intelligence home"><span className="wordmark" aria-hidden="true"><strong>ORVIA</strong></span><span className="brand-copy"><strong>SECURITY &amp; INTELLIGENCE</strong><small>AN ORVIA OVERSIGHT CAPABILITY</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="btn btn-primary btn-small desktop-cta" href="/contact">Request a Review</Link>
      <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div className="mobile-nav"><Link href="/">Home</Link>{links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/iris-intelligence">IRIS technology</Link><Link href="/contact">Contact</Link></div></details>
    </div></header>
  </>
}
