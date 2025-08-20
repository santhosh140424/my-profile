import React from 'react';
import './Homepage.css'; // Custom styles

function Home() {
  return (
    <section className="about-section text-white d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6 text-center text-md-start">
            <div className="overlay">
              <h1 className="display-4 fw-bold">
                I'm <span className="highlight">Santhosh Kumar</span>
              </h1>

              <h3 className="fw-light text-warning typing-multiple">
                <span>Full Stack Developer</span>
                <span>Team Lead</span>
                <span>Problem Solver</span>
              </h3>
              
              <p className="mt-3 text-light">
                Passionate about building scalable web applications and leading teams to deliver high-quality 
                solutions. With expertise in both frontend and backend technologies, I enjoy turning ideas 
                into user-friendly products.
              </p>

              <div className="my-3">
                <i className="fab fa-github mx-2"></i>
                <i className="fab fa-linkedin mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-instagram mx-2"></i>
              </div>

              <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                <a href="/resume.pdf" download className="btn btn-outline-warning px-4">
                  Resume <i className="bi bi-download ms-2"></i>
                </a>
                <a href="#contact" className="btn btn-outline-light px-4">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="baner-image">
              <img 
                src="/images/santhosh.jpg" 
                alt="Santhosh Kumar" 
                className="img-fluid rounded-circle shadow-lg profile-img" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
