import { FadeIn } from '../common/animations';
import SectionTitle from '../common/SectionTitle';
import './Education.css';

function Education({ education, languages, interests }) {
  return (
    <section id="education" className="education-section">
      <FadeIn>
        <SectionTitle>Education</SectionTitle>
        <div className="education-list">
          {education.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="education-item">
                <div>
                  <div className="education-degree">{e.degree}</div>
                  <div className="education-school">{e.school}</div>
                </div>
                <span className="education-year">{e.year}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="languages-section">
          <div className="section-title">Languages</div>
          <div className="languages-list">
            {languages.map(l => (
              <span key={l} className="language-item">{l}</span>
            ))}
          </div>
        </div>

        <div className="interests-section">
          <div className="section-title">Interests</div>
          <div className="interests-list">
            {interests.map(interest => (
              <div key={interest} className="interest-item">
                <span className="interest-bullet">›</span>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Education;