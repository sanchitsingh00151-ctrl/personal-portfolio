import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import './Home.css';

/**
 * Home Page Component - Shinobi Profile & Landing Page
 */
export default function Home({ onNavigate }) {
  // Loading screen state (shows isolated cinematic Mangekyo intro on first load)
  const [showLoading, setShowLoading] = useState(true);

  // Simple frontend contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Automatically finish intro and reveal Home after 2.6 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  // Get top 3 featured missions (S-Rank and A-Rank)
  const featuredMissions = projectsData.slice(0, 3);

  return (
    <div className="home-page">
      {/* Isolated Cinematic Mangekyo Sharingan Opening Intro */}
      {showLoading && (
        <div className="mangekyo-loading-screen">
          <div className="sharingan-eye-container">
            <img
              src="/sharingan.png"
              alt="Mangekyo Sharingan"
              className="sharingan-accelerating-eye"
            />
          </div>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="hero-card">
          <p className="section-label">Shinobi Profile</p>
          <h1 className="hero-name">SANCHIT SINGH</h1>
          <h2 className="hero-title">Web Developer | CSE Data Science Student</h2>
          <p className="hero-bio">
            Building projects, learning new technologies and solving problems through code.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onNavigate('/projects')}>
              VIEW MISSIONS
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('/about')}>
              ABOUT ME
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/sharingan.png"
            alt="Shinobi Emblem"
            className="hero-sharingan-badge"
            title="Sanchit Singh Shinobi Crest"
          />
          <div className="badge-caption">
            <p className="badge-title">Rank: S-Class Candidate</p>
            <p className="badge-subtitle">Frontend & Data Analytics</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Missions Section */}
      <section className="featured-section">
        <div className="section-header">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Priority Missions</h2>
        </div>

        <div className="missions-grid">
          {featuredMissions.map((mission) => (
            <article key={mission.id} className="mission-card">
              <div className="card-top">
                <span className={`rank-badge rank-${mission.rank.toLowerCase()}`}>
                  {mission.rank}
                </span>
              </div>
              <h3 className="mission-name">{mission.name}</h3>
              <p className="mission-desc">{mission.shortDescription}</p>

              <div className="tech-tags">
                {mission.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <button className="btn-card" onClick={() => onNavigate('/projects')}>
                [ VIEW MISSION ]
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div className="contact-info">
            <p className="section-label">Communication Scroll</p>
            <h2 className="section-title">Send a Mission Dispatch</h2>
            <p className="contact-sub">
              Interested in collaborating or discussing web development & data science projects? Reach out directly!
            </p>

            <div className="direct-links">
              <div className="contact-item">
                <span className="item-label">Email:</span>
                <a href="mailto:sanchitsingh.dev@gmail.com" className="item-value">
                  sanchitsingh.dev@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="item-label">GitHub:</span>
                <a href="https://github.com/sanchitsingh" target="_blank" rel="noreferrer" className="item-value">
                  github.com/sanchitsingh
                </a>
              </div>
              <div className="contact-item">
                <span className="item-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/sanchitsingh" target="_blank" rel="noreferrer" className="item-value">
                  linkedin.com/in/sanchitsingh
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="name">Shinobi Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Scroll Message</label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your mission objective..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              SEND DISPATCH
            </button>

            {formSubmitted && (
              <p className="form-success-msg">
                ✓ Dispatch sent! Thank you for reaching out, Sanchit will respond soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
