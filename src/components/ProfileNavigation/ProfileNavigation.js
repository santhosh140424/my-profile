import React, { useEffect, useState } from "react";
import './ProfileNavigation.css';
import { NavLink } from "react-router-dom";
import navImage from '../Images/12542712.png';

const ProfileNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`profile-nav-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="profile-nav container">
        <div className="icon">
          <a href="/" className="home-link">
            <img src={navImage} alt="Home" className="home-icon" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#about" onClick={scrollToSection('about')} className="about-link">
              About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={scrollToSection('resume')} className="about-link">
              Resume
            </a>
          </li>
          <li>
            <a href="#profile" onClick={scrollToSection('profile')} className="about-link">
              Portfolio
            </a>
          </li>
          {/* <li>
            <NavLink to="/profile/testimonials" className={({ isActive }) => isActive ? "active" : ""}>
              Testimonials
            </NavLink>
          </li> */}
          <li>
            <a href="#contact" onClick={scrollToSection('contact')} className="about-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileNavigation;
