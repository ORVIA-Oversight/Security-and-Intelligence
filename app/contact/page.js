export const metadata={
  title:'Contact',
  description:'Request a controlled ORVIA Security & Intelligence review or scope enquiry.',
  alternates:{canonical:'/contact'}
};

export default function Page(){return <section className="contact-page">
  <div className="contact-copy">
    <div className="eyebrow">START WITH THE QUESTION</div>
    <h1>What do you need to understand?</h1>
    <p>Tell us the decision this work needs to support. Controlled triage comes before evidence transfer.</p>
    <p className="authority-line">Do not send unrestricted sensitive evidence through this initial enquiry form.</p>
    <div className="emergency"><strong>ORVIA is not an emergency service.</strong><br/>If there is an immediate risk to life or safety, contact the appropriate emergency or statutory service.</div>
  </div>
  <form className="contact-form">
    <label>Name<input name="name" autoComplete="name"/></label>
    <label>Organisation<input name="organisation" autoComplete="organization"/></label>
    <label>Email<input type="email" name="email" autoComplete="email"/></label>
    <label>Telephone<input name="telephone" autoComplete="tel"/></label>
    <label className="full">What do you need to understand?<textarea name="question" rows="4"/></label>
    <label className="full">What decision will this support?<textarea name="decision" rows="3"/></label>
    <label className="full">What information do you already hold?<textarea name="information" rows="3"/></label>
    <label>Deadline<input type="date" name="deadline"/></label>
    <label>Immediate safety / criminal / emergency issue?<select name="emergency"><option>No</option><option>Yes</option></select></label>
    <label className="check full"><input type="checkbox" required/> I understand this form is for triage and that unrestricted sensitive evidence should not be uploaded here.</label>
    <button className="btn btn-primary" type="button">SUBMIT FOR CONTROLLED TRIAGE</button>
  </form>
</section>}