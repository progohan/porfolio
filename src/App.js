import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

// ✅ Import the image properly
import hero from './assets/hero.png';

function App() {
  const headerBg = {
    backgroundImage: `linear-gradient(rgba(0,12,34,0.6), rgba(0,12,34,0.6)), url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <>
      <header id="home" style={headerBg}>
        <h1>Eduardo Fernández Ortiz</h1>
        <p>Project Director | Infrastructure Development Leader</p>
      </header>

      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
