import React, { useState } from 'react';

export default function WhyWorkWithUs() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = [
    'Communication',
    'Strategy',
    'Execution Speed',
    'Metrics',
    'Expertise',
    'Testing',
    'Clarity',
    'Relationship'
  ];

  const otherAgenciesPoints = [
    'Delayed or Slow Communication',
    'Outmoded Strategies for Growth',
    'Slow campaign launches, weeks of delay',
    'Vanity metrics (likes, impressions)',
    'Insufficient Industry Research',
    'Recycled creatives with no testing',
    'Confusing jargon, lack of clarity',
    'Treat Clients Like Transactions'
  ];

  const launchAdsFastPoints = [
    'Fast, transparent, constant communication',
    'Tailored strategies aligned with your goals',
    'Lightning-fast execution, campaigns live in days',
    'Revenue-first, ROI-driven campaigns',
    'Industry Specific Expertise',
    'High-performing, tested ad creatives',
    'Simple, data-driven reports you can act on',
    'We act as an extension of your team'
  ];

  return (
    <section className="comparison-section" id="why-us">
      <div className="container">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">🧐</span>
          </div>
          <h2 className="section-title-clean">
            Why Work With Us?
            <span className="wavy-underline">
              <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
                <path d="M2 9C45 3 135 1 178 10" stroke="#FC7820" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="section-subtitle-clean">Proof of What Happens When Strategy Meets Execution.</p>
        </div>

        <div className="comparison-container-layout">
          {/* Sidebar Category Tabs */}
          <div className="comparison-categories-sidebar">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`comp-badge-tab ${activeCategoryIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveCategoryIndex(idx)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2 Comparison Cards */}
          <div className="comparison-cards-row">
            {/* Card 1: Other Agencies */}
            <div className="comparison-card comp-card-other">
              <div className="comparison-card-top">
                <span className="card-icon-emoji">🥱</span>
                <h3 className="comparison-card-title">Other Agencies</h3>
              </div>
              <ul className="comparison-list">
                {otherAgenciesPoints.map((pt, idx) => (
                  <li 
                    key={idx} 
                    className={`comp-item-row negative ${activeCategoryIndex === idx ? 'active-highlight' : ''}`}
                  >
                    <span className="status-icon"><i className="fa-solid fa-xmark"></i></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: LaunchAdsFast */}
            <div className="comparison-card comp-card-launchfast">
              <div className="comparison-card-top">
                <span className="card-icon-emoji">🚀</span>
                <h3 className="comparison-card-title">LaunchAdsFast</h3>
              </div>
              <ul className="comparison-list">
                {launchAdsFastPoints.map((pt, idx) => (
                  <li 
                    key={idx} 
                    className={`comp-item-row positive ${activeCategoryIndex === idx ? 'active-highlight' : ''}`}
                  >
                    <span className="status-icon"><i className="fa-solid fa-check"></i></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
