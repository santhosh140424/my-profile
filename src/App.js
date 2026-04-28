import { useState, useEffect } from "react";
import './App.css';
import data from './data';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const NAV = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking (IntersectionObserver)
  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const name = id.charAt(0).toUpperCase() + id.slice(1);
            setActive(name);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(sec => sec && observer.observe(sec));

    return () => sections.forEach(sec => sec && observer.unobserve(sec));
  }, []);

  // Scroll function
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setActive(id);
  };

  return (
    <div className="portfolio">
      
      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <span className="nav-logo">SK</span>

        <div className="nav-buttons">
          {NAV.map(n => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              className={`nav-button ${active === n ? 'active' : ''}`}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      {/* SECTIONS */}
      <About id="about" data={data} scrollTo={scrollTo} />
      <Skills id="skills" skills={data.skills} />
      <Experience id="experience" experience={data.experience} />
      <Projects id="projects" projects={data.projects} />
      <Education id="education" education={data.education} languages={data.languages} interests={data.interests} />
      <Contact id="contact" email={data.email} phone1={data.phone1} phone2={data.phone2} location={data.location} />

      <Footer />
    </div>
  );
}