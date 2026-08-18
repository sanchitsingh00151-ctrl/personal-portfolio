import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

/**
 * Projects Page Component - Shinobi Mission Board
 * Features 3 Rank Groups (C/D Rank, A/B Rank, S-Rank)
 * Dynamic background theme transitions based on selected mission rank:
 * - C/D Rank -> HOT PINK
 * - A/B Rank -> LIGHTNING BLUE
 * - S Rank   -> BLOOD RED
 */
export default function Projects() {
  // Currently selected mission (null = neutral background theme)
  const [selectedMission, setSelectedMission] = useState(null);

  // Group missions into the 3 specified rank categories
  const cdMissions = projectsData.filter((p) => p.group === 'CD');
  const abMissions = projectsData.filter((p) => p.group === 'AB');
  const sMissions  = projectsData.filter((p) => p.group === 'S');

  // Determine dynamic background theme class
  let themeClass = 'theme-neutral';
  if (selectedMission) {
    if (selectedMission.group === 'CD') themeClass = 'theme-cd-pink';
    if (selectedMission.group === 'AB') themeClass = 'theme-ab-blue';
    if (selectedMission.group === 'S')  themeClass = 'theme-s-red';
  }

  const handleSelectMission = (mission) => {
    // Toggle selection if clicking the same card
    if (selectedMission?.id === mission.id) {
      setSelectedMission(null);
    } else {
      setSelectedMission(mission);
    }
  };

  return (
    <div className={`projects-page ${themeClass}`}>
      {/* Header Banner */}
      <section className="projects-header">
        <p className="section-label">Command Center</p>
        <h1 className="projects-title">SHINOBI MISSION BOARD</h1>
        <p className="projects-sub">
          Select a mission card to inspect details and activate its rank energy field.
        </p>
      </section>

      {/* Selected Mission Detail Panel */}
      {selectedMission && (
        <section className="selected-detail-panel">
          <div className="detail-panel-header">
            <div className="panel-title-block">
              <span className={`rank-badge rank-${selectedMission.rank.toLowerCase()}`}>
                {selectedMission.rank}
              </span>
              <h2 className="panel-mission-name">{selectedMission.name}</h2>
            </div>
            <button className="panel-close-btn" onClick={() => setSelectedMission(null)}>
              [ CLOSE MISSION SCROLL ]
            </button>
          </div>

          <div className="detail-panel-grid">
            <div className="panel-block">
              <h4>Mission Objective</h4>
              <p>{selectedMission.problem}</p>
            </div>

            <div className="panel-block">
              <h4>Technical Approach</h4>
              <p>{selectedMission.approach}</p>
            </div>

            <div className="panel-block">
              <h4>Description & Impact</h4>
              <p>{selectedMission.fullDescription}</p>
            </div>

            <div className="panel-block">
              <h4>Status & Technologies</h4>
              <p className="panel-status">Status: {selectedMission.status}</p>
              <div className="tech-tags">
                {selectedMission.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-actions">
            <a href={selectedMission.github} target="_blank" rel="noreferrer" className="btn btn-primary">
              GitHub Repository
            </a>
            <a href={selectedMission.demo} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Live Mission Demo
            </a>
          </div>
        </section>
      )}

      {/* --- GROUP 1: C / D RANK MISSIONS (HOT PINK THEME) --- */}
      <section className="rank-group-section group-cd">
        <div className="group-header">
          <div className="group-title-row">
            <h2 className="group-title">C / D RANK MISSIONS</h2>
            <span className="group-theme-tag">HOT PINK ENERGY</span>
          </div>
          <p className="group-subtitle">Training & lower-risk foundational missions</p>
        </div>

        <div className="missions-grid">
          {cdMissions.map((mission) => {
            const isSelected = selectedMission?.id === mission.id;
            return (
              <article
                key={mission.id}
                className={`board-card card-cd ${isSelected ? 'selected-card' : ''}`}
                onClick={() => handleSelectMission(mission)}
              >
                <div className="card-top">
                  <span className="rank-badge rank-cd">{mission.rank}</span>
                  <span className="select-indicator">{isSelected ? '✓ ACTIVE' : 'SELECT'}</span>
                </div>
                <h3 className="card-title">{mission.name}</h3>
                <p className="card-desc">{mission.shortDescription}</p>
                <div className="tech-tags">
                  {mission.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="btn-details">[ VIEW DETAILS ]</button>
              </article>
            );
          })}
        </div>
      </section>

      {/* --- GROUP 2: A / B RANK MISSIONS (LIGHTNING BLUE THEME) --- */}
      <section className="rank-group-section group-ab">
        <div className="group-header">
          <div className="group-title-row">
            <h2 className="group-title">A / B RANK MISSIONS</h2>
            <span className="group-theme-tag">LIGHTNING BLUE ENERGY</span>
          </div>
          <p className="group-subtitle">Advanced high-tier development missions</p>
        </div>

        <div className="missions-grid">
          {abMissions.map((mission) => {
            const isSelected = selectedMission?.id === mission.id;
            return (
              <article
                key={mission.id}
                className={`board-card card-ab ${isSelected ? 'selected-card' : ''}`}
                onClick={() => handleSelectMission(mission)}
              >
                <div className="card-top">
                  <span className="rank-badge rank-ab">{mission.rank}</span>
                  <span className="select-indicator">{isSelected ? '✓ ACTIVE' : 'SELECT'}</span>
                </div>
                <h3 className="card-title">{mission.name}</h3>
                <p className="card-desc">{mission.shortDescription}</p>
                <div className="tech-tags">
                  {mission.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="btn-details">[ VIEW DETAILS ]</button>
              </article>
            );
          })}
        </div>
      </section>

      {/* --- GROUP 3: S RANK MISSIONS (BLOOD RED THEME) --- */}
      <section className="rank-group-section group-s">
        <div className="group-header">
          <div className="group-title-row">
            <h2 className="group-title">S RANK MISSIONS</h2>
            <span className="group-theme-tag">BLOOD RED ELITE</span>
          </div>
          <p className="group-subtitle">Elite high-stakes system architecture missions</p>
        </div>

        <div className="missions-grid">
          {sMissions.map((mission) => {
            const isSelected = selectedMission?.id === mission.id;
            return (
              <article
                key={mission.id}
                className={`board-card card-s ${isSelected ? 'selected-card' : ''}`}
                onClick={() => handleSelectMission(mission)}
              >
                <div className="card-top">
                  <span className="rank-badge rank-s">{mission.rank}</span>
                  <span className="select-indicator">{isSelected ? '✓ ACTIVE' : 'SELECT'}</span>
                </div>
                <h3 className="card-title">{mission.name}</h3>
                <p className="card-desc">{mission.shortDescription}</p>
                <div className="tech-tags">
                  {mission.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="btn-details">[ VIEW DETAILS ]</button>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
