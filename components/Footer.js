import Link from 'next/link';

export default function Footer(){
  return <footer className="footer">
    <div className="footer-topline"></div>
    <div className="footer-grid">
      <div className="footer-lead">
        <div className="wordmark wordmark-light" aria-label="ORVIA">
          <b>O</b><b>R</b><b>V</b><b>I</b><b>A</b>
        </div>
        <p className="footer-name">Security &amp; Intelligence</p>
        <p>Structured intelligence, evidence verification and investigative support for organisations that need clarity they can trace and defend.</p>
      </div>
      <div>
        <h4>Capability</h4>
        <Link href="/what-we-do">What We Do</Link>
        <Link href="/intelligence">Intelligence</Link>
        <Link href="/evidence-verification">Evidence &amp; Verification</Link>
        <Link href="/digital-technical-intelligence">Digital &amp; Technical Intelligence</Link>
        <Link href="/investigative-support">Investigative Support</Link>
      </div>
      <div>
        <h4>System</h4>
        <Link href="/iris-intelligence">IRIS Intelligence Technology</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/about-governance">About &amp; Governance</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h4>ORVIA Oversight Ltd</h4>
        <p>Company number 16123685</p>
        <p>ICO ZC152311</p>
        <p>0330 043 3703</p>
        <p>hello@orvia.org.uk</p>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Evidence before assumption.</span>
      <span>AI supports the work. Authorised humans retain judgement, authority and accountability.</span>
    </div>
  </footer>
}
