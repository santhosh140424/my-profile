import { FadeIn } from '../common/animations';
import SectionTitle from '../common/SectionTitle';
import './Projects.css';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <FadeIn>
        <SectionTitle>Key Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="project-card" style={{ borderTop: `2px solid ${p.color}` }}>
                <div className="project-name">{p.name}</div>
                <div className="project-tech" style={{ color: p.color }}>{p.tech}</div>
                <p className="project-desc">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default Projects;