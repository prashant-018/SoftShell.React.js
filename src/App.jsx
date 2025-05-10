import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button 
        className="toggle-btn" 
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <>
            <span className="icon">☀️</span>
            <span className="text">Light Mode</span>
          </>
        ) : (
          <>
            <span className="icon">🌙</span>
            <span className="text">Dark Mode</span>
          </>
        )}
      </button>

      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Chatbot />
    </div>
  );
}

export default App;