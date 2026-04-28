import { FadeIn } from '../common/animations';
import SectionTitle from '../common/SectionTitle';
import './Skills.css';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <FadeIn>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="skill-card">
                <div className="skill-label">
                  {s.label}
                </div>
                <div className="skill-items">
                  {s.items.map(item => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default Skills;