import { FadeIn } from '../common/animations';
import SectionTitle from '../common/SectionTitle';
import './Experience.css';

function Experience({ experience }) {
  return (
    <section id="experience" className="experience-section">
      <FadeIn>
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="experience-item">
                <div className="timeline-dot" />
                <div className="experience-header">
                  <div>
                    <div className="experience-role">{exp.role}</div>
                    <div className="experience-company">{exp.company} · {exp.location}</div>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-points">
                  {exp.points.map((p, j) => (
                    <li key={j} className="experience-point">
                      <span className="experience-bullet" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default Experience;