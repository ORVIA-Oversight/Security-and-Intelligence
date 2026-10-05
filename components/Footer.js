import Link from 'next/link';

export default function Footer(){
  return <footer className="footer">
    <div className="footer-topline"></div>
    <div className="footer-grid">
      <div className="footer-lead">
        <div className="wordmark wordmark-light" aria-label="ORVIA"><strong>ORVIA</strong></div>
        <p className="footer-name">Security &amp; Intelligence</p>
        <p>Structured intelligence, evidence verification and investigative support with human authority and clear provenance.</p>
      </div>
      <div>
        <h4>Capability</h4>
        <Link href="/what-we-do">What We Do</Link>
        <Link href="/intelligence">Intelligence</Link>
        <Link href="/evidence-verification">Evidence &amp; Verification</Link>
        <Link href="/digital-technical-intelligence">Digital &amp; Technical</Link>
        <Link href="/investigative-support">Investigative Support</Link>
      </div>
      <div>
        <h4>ORVIA</h4>
        <a href="https://orvia.org.uk">ORVIA Oversight</a>
        <a href="https://orvia.org.uk/products">Explore ORVIA</a>
        <Link href="/about-governance">Governance</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h4>Legal &amp; trust</h4>
        <p>ORVIA Oversight Ltd · Company 16123685</p>
        <p>Registered in England and Wales</p>
        <p>3rd Floor, 86–90 Paul Street, London EC2A 4NE</p>
        <p>0330 043 3703 · hello@orvia.org.uk</p>
        <a href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noreferrer">Armed Forces Covenant</a>
        <span>ERS Bronze · Veteran-founded</span>
        <a href="https://www.trustaveteran.com/team/orvia" target="_blank" rel="noreferrer">Trust A Veteran</a>
      </div>
    </div>
    <div className="security-accounts"><strong>Accounts filing status:</strong> Our first accounts are overdue. We are aware of the delay and are currently reconciling and preparing the accounts for filing. This is being treated as a priority, and this notice will be updated once the filing has been completed.</div>
    <div className="footer-bottom">
      <span>Evidence before assumption. AI supports the work; authorised humans retain judgement and accountability.</span>
      <span><a href="https://orvia.org.uk/privacy">Privacy</a> · <a href="https://orvia.org.uk/terms">Terms</a> · <a href="https://orvia.org.uk/cookies">Cookies</a> · <a href="https://orvia.org.uk/accessibility">Accessibility</a></span>
    </div>
  </footer>
}
