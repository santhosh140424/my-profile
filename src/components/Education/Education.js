import React from "react";
import './Education.css';

function Education() {
  return (
    <div id="resume" className="resume-wrapper">
      <section className="resume-section container py-5 text-white">
        <div className="education-header mb-5 pb-3">
          <h2 className="display-4 fw-bold">Education</h2>
          <div className="education-list">
            <div className="education-item mb-4">
              <div className="education-item mb-4">
                <h3 className="fw-semibold">Bachelor of Computer Applications</h3>
                <p className="text-muted">University of Madras, Chennai, TN</p>
                <p>Graduated: 2019</p>
                <ul className="text-muted">
                  <li>Specialized in Software Development & Database Management</li>
                  <li>Top 5% in Academic Performance</li>
                  <li>Completed Final Year Project on <strong>Cloud-Based NoSQL Database Management System</strong></li>
                </ul>
              </div>  

              <div className="education-item mb-4">
                <h3 className="fw-semibold">Higher Secondary School (12th)</h3>
                <p className="text-muted">Govt Higher Secondary School, Lakshmipuram Chennai-600052</p>
                <p>Completed: 2016</p>
                <ul className="text-muted">
                  <li>Science Stream with Computer Science</li>
                </ul>
              </div>

              <div className="education-item mb-4">
                <h3 className="fw-semibold">Secondary School (10th)</h3>
                <p className="text-muted">Govt Higher Secondary School, Lakshmipuram Chennai-600052</p>
                <p>Completed: 2014</p>
                <ul className="text-muted">
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="WorkExperience mb-5 pb-3">
          <h2 className="display-4 fw-bold">Work Experience</h2>
          <div className="experience-item mb-4">
            <h3 className="fw-semibold">Software Engineer</h3>
            <p className="text-muted">Quilltez Soft Solution Pvt Ltd, Chennai, TN</p>
            <p>2022 - Present</p>
            <ul className="text-muted">
              <li>Developed and maintained web applications using React, Node.js, and MySQL</li>
              <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
              <li>Built an <strong>Email Filtering System</strong> using Laravel with advanced spam detection</li>
              <li>Developed custom dashboards and admin panels using <strong>Laravel Filament</strong></li>
              <li>Contributed to multiple <strong>Drupal-based projects</strong>, including module customization and theme development</li>
              <li>Designed and optimized relational database schemas in <strong>MySQL</strong> for high-performance applications</li>
            </ul>
          </div>
        </div>
        <div className="skills mb-5 pb-3">
          <h2 className="display-4 fw-bold">Skills</h2>
          <div className="text-muted">
            <p className="skill-text mb-5">
              Skilled in frontend development with React, JavaScript, and Bootstrap, and experienced in backend 
              technologies such as Node.js, Laravel, Drupal, and MySQL. Proficient in modern tools including Git, 
              and cloud platforms.
            </p>
            <div className="row">
              {/* Spoken Languages */}
              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Spoken Languages</h5>
                <div className="skill">
                  <span>English</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Tamil</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>

              {/* Frontend Development */}
              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Frontend Development</h5>
                <div className="skill">
                  <span>React</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>JavaScript / TypeScript</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>HTML / CSS / Bootstrap</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Backend Development</h5>
                <div className="skill">
                  <span>Node.js</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Laravel (PHP)</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>MySQL</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Drupal CMS</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>

              {/* Tools & Other */}
              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Tools & Platforms</h5>
                <div className="skill">
                  <span>Git / GitHub</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>CI/CD (Jenkins, GitHub Actions)</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Cloud (AWS / Firebase)</span>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
    </div>
  );
}

export default Education;