import { FadeIn } from '../common/animations';
import './About.css';

function About({ data, scrollTo }) {
  return (
    <FadeIn>
      <section id="about" className="about-section">
        <div className="avatar">SK</div>

        <div className="title">
          Full Stack Developer
        </div>
        <h1 className="name">
          {data.name}
        </h1>
        <p className="summary">
          {data.summary}
        </p>
        <div className="tech-stack">
          {["Laravel", "React", "Drupal 9/10/11", "MySQL", "Chain Link AI"].map(t => (
            <span key={t} className="tech-item">{t}</span>
          ))}
        </div>
        <div className="cta-buttons">
          <button onClick={() => scrollTo("Contact")} className="btn-primary">Get in Touch</button>
          <button onClick={() => scrollTo("Projects")} className="btn-secondary">View Projects</button>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;