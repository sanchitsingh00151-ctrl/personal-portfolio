import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar Component - Simple Shinobi navigation bar
 * Triggers Flying Thunder God transition when switching routes
 */
export default function Navbar({ onNavigate }) {
  const location = useLocation();

  const handleNavClick = (event, targetPath) => {
    // If clicking current page, do nothing
    if (location.pathname === targetPath) return;

    event.preventDefault();
    onNavigate(targetPath);
  };

  return (
    <header className="site-header">
      <div className="brand">
        <p className="eyebrow">Shinobi Mission Portfolio</p>
        <h1 className="logo-title">SANCHIT SINGH</h1>
      </div>
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          onClick={(e) => handleNavClick(e, '/')}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          onClick={(e) => handleNavClick(e, '/about')}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          onClick={(e) => handleNavClick(e, '/projects')}
        >
          MISSIONS
        </NavLink>
      </nav>
    </header>
  );
}
