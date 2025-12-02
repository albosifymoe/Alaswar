import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-secondary-900 bg-secondary-50 selection:bg-primary-200 selection:text-primary-900">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Values />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;