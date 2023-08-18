//import HOOK REACT
import React from 'react';
//import COMPONENTS
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
//import SCSS
import './App.scss'

function App(){


    return  (
        <>
        <Navbar />
        <main className="main">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        </>
    );
}
    
export default App;
