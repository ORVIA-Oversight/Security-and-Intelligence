export const metadata={
  title:'Contact',
  description:'Contact ORVIA Security & Intelligence by email or telephone to discuss a controlled review or scope enquiry.',
  alternates:{canonical:'/contact'}
};

const subject='Security & Intelligence enquiry';
const body=[
  'Name:',
  'Organisation:',
  'Telephone:',
  '',
  'What do you need to understand?',
  '',
  'What decision will this support?',
  '',
  'What information do you already hold? (please describe it; do not attach sensitive evidence)',
  '',
  'Deadline:',
].join('\n');
const mailto=`mailto:hello@orvia.org.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function Page(){return <section className="contact-page">
  <div className="contact-copy">
    <div className="eyebrow">START WITH THE QUESTION</div>
    <h1>What do you need to understand?</h1>
    <p>Tell us the decision this work needs to support. Controlled triage comes before any evidence is transferred.</p>
    <p className="authority-line">Please do not send sensitive evidence in your first message. We will agree a secure route once the scope is clear.</p>
    <div className="emergency"><strong>ORVIA is not an emergency service.</strong><br/>If there is an immediate risk to life or safety, contact the appropriate emergency or statutory service.</div>
  </div>
  <div className="contact-form contact-direct">
    <div className="full">
      <div className="eyebrow">CONTACT US DIRECTLY</div>
      <p>We do not take enquiries through an online form at the moment. Please email or call us. A person reads every enquiry; nothing is triaged automatically.</p>
    </div>
    <div className="full">
      <strong>Email</strong><br/>
      <a href={mailto}>hello@orvia.org.uk</a>
      <p className="contact-note">Use the subject “Security &amp; Intelligence enquiry”. The button below opens your email app with a short template.</p>
    </div>
    <div className="full">
      <strong>Telephone</strong><br/>
      <a href="tel:+443300433703">0330 043 3703</a>
    </div>
    <div className="full">
      <strong>Helpful to include</strong>
      <ul>
        <li>What you need to understand, and the decision it will support</li>
        <li>What information you already hold (describe it; do not attach it)</li>
        <li>Any deadline</li>
        <li>Whether there is an immediate safety, criminal or emergency issue</li>
      </ul>
    </div>
    <div className="full"><a className="btn btn-primary" href={mailto}>EMAIL HELLO@ORVIA.ORG.UK</a></div>
    <p className="full contact-note">How we handle your information: see our <a href="/privacy">privacy notice</a>.</p>
  </div>
</section>}
