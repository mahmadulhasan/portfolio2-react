import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Contact from './components/contact/contact.js';
import Experience from './components/experience/experience.js';
import Skills from './components/skills/skills.js';
import Terstimonial from './components/testimonial/testimonial.js';
import About from './components/about/about.js';
import Footer from './components/footer/footer.js';
import Project from './components/project/project.js';

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Experience/>
    <Skills/>
    <Project/>
    <Terstimonial/>
    <Contact />
    <Footer/>
    
    
    </>
  );
}

export default App;
