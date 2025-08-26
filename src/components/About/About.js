import React from 'react';
import './About.css'; // Custom styles
import Profile from '../Images/santhosh.jpeg';

function About() {
  return (
    <div id="about" className="about-wrapper">
      <section className="about-bio-section container py-5 text-white">
        <div className="bio mb-4">
          <div className="about-image mb-4">
            <img 
              src={Profile}
              alt="Santhosh Kumar" 
              className="img-fluid shadow-lg profile-img" 
            />
          </div>

          <div className="about-text">
            <h2 className="fw-bold">About me</h2>
            <p className="text-muted mb-4">
              Passionate and motivated professional with a love for technology, creative problem-solving,<br/>
              and continuous learning. I enjoy exploring new tools, working on impactful projects, <br/>
              and combining my interests with my professional journey.
            </p>

            <div className="row">
              <div className="col-md-6">
                <p><i className="bi bi-geo-alt-fill"></i> <strong>Location:</strong> &nbsp;&nbsp;&nbsp;Chennai, TN</p>
                <p><i className="bi bi-flag-fill"></i> <strong>Nationality:</strong> &nbsp;&nbsp;&nbsp;Indian </p>
                <p><i className="bi bi-mortarboard-fill"></i> <strong>Study:</strong> &nbsp;&nbsp;&nbsp;University of Madrass</p>
              </div>
              <div className="col-md-6">
                <p><i className="bi bi-calendar3"></i> <strong>Age:</strong> &nbsp;&nbsp;&nbsp;26</p>
                <p>
                  <i className="bi bi-star-fill"></i> <strong>Interests:</strong> 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motorcycles 🏍️, Cricket 🏏, Music 🎶, Traveling ✈️, Fitness 💪
                </p>
                <p>
                  <i className="bi bi-building"></i> <strong>Employment:</strong> &nbsp;&nbsp;&nbsp;
                  Software Engineer at <span className="fw-semibold">Quilltez Soft Solution Pvt Ltd.</span> 
                  — specializing in full-stack development, domain technologies, and cloud solutions.
                </p>
              </div>
            </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default About;
