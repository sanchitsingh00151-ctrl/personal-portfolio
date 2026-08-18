import React from 'react';
import { skillsData, achievementsData } from '../data/projectsData';
import './About.css';

/**
 * About Page Component - Shinobi Dossier, Skills (Training Grounds), & Achievements
 */
export default function About() {
  return (
    <div className="about-page">
      {/* 1. Shinobi Dossier Header */}
      <section className="dossier-section">
        <div className="dossier-card">
          <div className="dossier-badge-row">
            <span className="dossier-badge">CLASSIFIED DOSSIER</span>
            <span className="status-badge">STATUS: ACTIVE SHINOBI</span>
          </div>

          <h1 className="dossier-name">SANCHIT SINGH</h1>
          <p className="dossier-domain">Domain: Web Development & CSE Data Science</p>

          <div className="dossier-grid">
            <div className="dossier-block">
              <h3>Developer Journey</h3>
              <p>
                I am a Computer Science & Engineering (Data Science) student passionate about building fast,
                clean, and responsive web applications. My journey started with core programming logic in C and C++,
                which grew into frontend web development with HTML, CSS, and modern React.js.
              </p>
            </div>

            <div className="dossier-block">
              <h3>Education & Specialization</h3>
              <p>
                Currently pursuing a Bachelor of Technology in CSE with a specialization in Data Science.
                My coursework combines Data Structures, Object-Oriented Programming, Data Analysis, and Web System Architecture.
              </p>
            </div>

            <div className="dossier-block">
              <h3>Interests & Focus Areas</h3>
              <p>
                Interested in building user-focused web interfaces, stateful React dashboards, data visualization tools,
                and optimizing web performance for clean code reviews and user experiences.
              </p>
            </div>

            <div className="dossier-block">
              <h3>Career Objectives</h3>
              <p>
                Aiming to contribute as a Software Engineering / Frontend Development intern or full-time engineer,
                tackling real-world web applications and expanding my expertise in scalable software systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills — Training Grounds */}
      <section className="skills-section">
        <div className="section-header">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">TRAINING GROUNDS</h2>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-card">
            <h3 className="skill-category">Programming Jutsu</h3>
            <ul className="skill-list">
              {skillsData.programming.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Web Development */}
          <div className="skill-card">
            <h3 className="skill-category">Web Development</h3>
            <ul className="skill-list">
              {skillsData.webDev.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Environment */}
          <div className="skill-card">
            <h3 className="skill-category">Tools & Scrolls</h3>
            <ul className="skill-list">
              {skillsData.tools.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Achievements & Activities */}
      <section className="achievements-section">
        <div className="section-header">
          <p className="section-label">Milestones</p>
          <h2 className="section-title">Shinobi Achievements</h2>
        </div>

        <div className="timeline-container">
          {achievementsData.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-info">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
