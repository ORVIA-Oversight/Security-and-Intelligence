import Link from 'next/link';

export default function Footer(){
  return <>
    <section className="estate-trust-panel"><div className="footer-trust-shell">
      <div className="estate-trust-intro"><span>TRUST SHOULD BE INSPECTABLE</span><h2>Do not take the claim on faith. Check the evidence.</h2><p>Company identity and external recognition are kept separate so you can see what each trust signal actually means.</p></div>
      <div className="estate-trust-grid">
        <article className="estate-trust-card"><span className="estate-trust-icon">▦</span><div><strong>ORVIA Oversight Ltd</strong><a href="https://find-and-update.company-information.service.gov.uk/company/16123685" target="_blank" rel="noreferrer">Companies House 16123685</a><details className="estate-filing-disclosure"><summary>Filing status</summary><p>Our first accounts are overdue. We are aware of the delay and are currently reconciling and preparing the accounts for filing. This is being treated as a priority, and this notice will be updated once the filing has been completed.</p></details></div></article>
        <article className="estate-trust-card"><span className="estate-trust-icon">⌂</span><div><strong>Registered office</strong><span>London EC2A 4NE</span></div></article>
        <a className="estate-trust-card" href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer"><span className="estate-trust-icon">A</span><div><strong>Armed Forces Covenant</strong><span>Signatory</span></div></a>
        <article className="estate-trust-card"><span className="estate-trust-icon">B</span><div><strong>ERS Bronze</strong><span>Employer Recognition Scheme</span></div></article>
        <a className="estate-trust-card" href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer"><span className="estate-trust-icon">★</span><div><strong>Trust A Veteran</strong><span>Current public profile</span></div></a>
      </div>
    </div></section>
    <footer className="footer">
      <div className="footer-topline"></div>
      <div className="footer-grid">
        <div className="footer-lead"><div className="wordmark wordmark-light" aria-label="ORVIA"><strong>ORVIA</strong></div><p className="footer-name">Security &amp; Intelligence</p><p>Structured intelligence, evidence verification and investigative support with human authority and clear provenance.</p></div>
        <div><h4>Capability</h4><Link href="/what-we-do">What We Do</Link><Link href="/intelligence">Intelligence</Link><Link href="/evidence-verification">Evidence &amp; Verification</Link><Link href="/digital-technical-intelligence">Digital &amp; Technical</Link><Link href="/investigative-support">Investigative Support</Link></div>
        <div><h4>ORVIA</h4><a href="https://orvia.org.uk">ORVIA Oversight</a><a href="https://orvia.org.uk/products">Explore ORVIA</a><Link href="/about-governance">Governance</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Legal</h4><p>ORVIA Oversight Ltd · Company 16123685</p><p>Registered in England and Wales</p><p>3rd Floor, 86–90 Paul Street, London EC2A 4NE</p><p>0330 043 3703 · hello@orvia.org.uk</p></div>
      </div>
      <div className="footer-bottom"><span>Evidence before assumption. AI supports the work; authorised humans retain judgement and accountability.</span><span><a href="https://orvia.org.uk/privacy">Privacy</a> · <a href="https://orvia.org.uk/terms">Terms</a> · <a href="https://orvia.org.uk/cookies">Cookies</a> · <a href="https://orvia.org.uk/accessibility">Accessibility</a></span></div>
    </footer>
  </>
}
