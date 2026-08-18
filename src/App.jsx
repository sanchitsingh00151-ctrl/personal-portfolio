import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TransitionOverlay from './components/TransitionOverlay';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

/**
 * Main Content Component wrapping navigation logic and Kunai transition trigger
 */
function MainContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // State to trigger Minato Flying Thunder God Kunai transition
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Custom navigation handler that plays Kunai animation before changing route
  const handleNavigate = (targetPath) => {
    if (location.pathname === targetPath) return;

    setIsTransitioning(true);

    // After animation expands (1.1 seconds), perform route change
    setTimeout(() => {
      navigate(targetPath);
      window.scrollTo(0, 0);
    }, 1100);

    // Hide transition overlay after page load complete
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <div className="app-container">
      {/* Flying Thunder God Kunai Transition Overlay */}
      <TransitionOverlay isActive={isTransitioning} />

      {/* Shared Navigation Bar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Route Views */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

/**
 * App Root Component with BrowserRouter wrapper
 */
export default function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}
