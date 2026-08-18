import React from 'react';
import './Footer.css';

/**
 * Footer Component - Simple portfolio footer
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-title">SANCHIT SINGH</p>
        <div className="footer-links">
          <a href="https://github.com/sanchitsingh" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="dot">•</span>
          <a href="https://linkedin.com/in/sanchitsingh" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="dot">•</span>
          <a href="mailto:sanchitsingh.dev@gmail.com">
            Email
          </a>
        </div>
        <p className="copyright">© 2026 Sanchit Singh. Built with React & Shinobi System.</p>
      </div>
    </footer>
  );
}
