import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Feature from './components/Feature';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [clickEffect, setClickEffect] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, []);

  const toggleDarkMode = () => {
    console.log('clicked!');
    darkMode ? 
      document.documentElement.classList.remove('dark') :
      document.documentElement.classList.add('dark');

    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  console.log('click effect ===', clickEffect);

  return (
    <div className="App container mx-auto py-12 px-6">
      <Nav 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        clickEffect={clickEffect}
        setClickEffect={setClickEffect}
      />
      <Hero />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
