import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Results({ onBookCall, onContact }) {
  const statBadges = [
    { text: '+180% Revenue Growth in 3 Months', icon: 'fa-arrow-trend-up', className: 'badge-coral' },
    { text: '$40K Sales in 60 Days', icon: 'fa-sack-dollar', className: 'badge-yellow' },
    { text: 'Every $1 Spent → $10 Earned', icon: 'fa-chart-line', className: 'badge-green' },
    { text: 'Conversions Increased by 140%', icon: 'fa-bullseye', className: 'badge-pink' },
    { text: 'Website Traffic +200%', icon: 'fa-users', className: 'badge-mint' },
    { text: 'CTR Improved by 2.2x', icon: 'fa-hand-pointer', className: 'badge-blue' },
    { text: 'CPC Dropped by 30%', icon: 'fa-percent', className: 'badge-purple' },
    { text: '40% Lower Cost Per Lead', icon: 'fa-arrow-down', className: 'badge-coral-light' },
    { text: '2000 Leads in 30 days', icon: 'fa-user-plus', className: 'badge-green-light' },
    { text: '9x ROAS Achieved', icon: 'fa-bolt', className: 'badge-cyan' },
  ];

  return (
    <section className="results-section" id="results">
      <div className="container text-center">
        <div className="section-header-styled">
          <div className="header-emojis-row relative-target-wrapper">
            <span className="emoji-circle-box">🎯</span>
            <span className="curved-target-arrow">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path d="M80 15 C 60 10, 30 30, 45 65" stroke="#1c1c1c" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
                <polyline points="35,60 45,65 52,55" stroke="#1c1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <h2 className="section-title-clean">
            Results Speak For Themselves
            <span className="wavy-underline">
              <svg width="220" height="12" viewBox="0 0 220 12" fill="none">
                <path d="M2 9C55 3 165 1 218 10" stroke="#FC7820" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="section-subtitle-clean">Proof of What Happens When Strategy Meets Execution.</p>
        </div>

        {/* Stat Badges Grid */}
        <div className="results-badges-grid">
          {statBadges.map((badge, idx) => (
            <div className={`stat-badge ${badge.className}`} key={idx}>
              <i className={`fa-solid ${badge.icon}`}></i>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} className="center-align-cta" />
      </div>
    </section>
  );
}
