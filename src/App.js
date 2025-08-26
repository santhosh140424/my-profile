import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ProfileNavigation/ProfileNavigation';
import Footer from './components/Footer/Footer';
import Profile from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Profile/>
          <About/>
          <Education/>
          <Projects/>
          <Contact/>          
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;