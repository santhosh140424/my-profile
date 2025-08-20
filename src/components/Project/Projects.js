import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects-wrapper">
      <section className="projects-section container py-5 text-white">
        <h2 className="display-4 fw-bold mb-4">Projects</h2>
        <div className="project-list">
          <div className="project-item mb-4">
            <h3 className="fw-semibold">Project Title 1</h3>
            <p className="text-muted">Brief description of the project, technologies used, and its impact.</p>
          </div>
          <div className="project-item mb-4">
            <h3 className="fw-semibold">Project Title 2</h3>
            <p className="text-muted">Brief description of the project, technologies used, and its impact.</p>
          </div>
          <div className="project-item mb-4">
            <h3 className="fw-semibold">Project Title 3</h3>
            <p className="text-muted">Brief description of the project, technologies used, and its impact.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;