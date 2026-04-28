import { FadeIn } from '../common/animations';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

function Contact({ email, phone1, phone2, location }) {
  return (
    <section id="contact" className="contact-section">
      <FadeIn>
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="contact-description">
          Open to exciting projects, collaborations, and opportunities. Feel free to reach out!
        </p>
        <div className="contact-grid">
          {[
            { label: "Email", value: email, href: `mailto:${email}` },
            { label: "Phone 1", value: phone1, href: `tel:${phone1}` },
            { label: "Phone 2", value: phone2, href: `tel:${phone2}` },
            { label: "Location", value: location, href: null },
          ].map(c => (
            <div key={c.label} className="contact-item">
              <div className="contact-label">{c.label}</div>
              {c.href
                ? <a href={c.href} className="contact-link">{c.value}</a>
                : <span className="contact-text">{c.value}</span>}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default Contact;