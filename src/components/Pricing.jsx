import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Pricing({ onBookCall, onContact }) {
  const launchFeatures = [
    'Complete ad account setup (Meta, Google, TikTok)',
    'Advanced funnel building',
    'Pixel & tracking integration',
    'Campaign launch within days'
  ];

  const growthFeatures = [
    'Daily campaign monitoring & optimization',
    'A/B testing for creatives & targeting',
    'Weekly performance reports',
    'Strategy adjustments for better ROI'
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">$</span>
          </div>
          <h2 className="section-title-clean">
            Transparent Pricing
            <span className="wavy-underline">
              <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
                <path d="M2 9C45 3 135 1 178 10" stroke="#FC7820" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="section-subtitle-clean">No hidden fees, no surprises — just clear plans that deliver results.</p>
        </div>

        <div className="pricing-cards-container">
          {/* Tier 1: Launch Plan */}
          <div className="pricing-tier-card">
            <div className="pricing-tier-header">
              <div className="tier-icon-circle">
                <span>🚀</span>
              </div>
              <h3 className="tier-headline">Everything you need to launch fast.</h3>
              <p className="tier-subtext">Perfect for brands ready to get started right away.</p>
            </div>

            <div className="tier-features-list">
              {launchFeatures.map((f, i) => (
                <div className="feature-row" key={i}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="tier-pricing-bottom">
              <span className="price-val">$600</span>
              <span className="price-desc">(one-time first month)</span>
            </div>
          </div>

          {/* Tier 2: Growth Plan */}
          <div className="pricing-tier-card featured-tier-highlight">
            <div className="pricing-tier-header">
              <div className="tier-icon-circle">
                <span>🎯</span>
              </div>
              <h3 className="tier-headline">Continuous growth, Every Month.</h3>
              <p className="tier-subtext">Focus on running your business while we scale your ads.</p>
            </div>

            <div className="tier-features-list">
              {growthFeatures.map((f, i) => (
                <div className="feature-row" key={i}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="tier-pricing-bottom">
              <span className="price-val">$300</span>
              <span className="price-desc">(one-time first month)</span>
            </div>
          </div>
        </div>

        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} className="center-align-cta" />
      </div>
    </section>
  );
}
