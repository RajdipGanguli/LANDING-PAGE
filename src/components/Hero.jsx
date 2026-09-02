import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Hero({ onBookCall, onContact }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Top Trust Pill */}
        <div className="hero-trust-badge">
          <span className="pulse-dot"></span>
          <span>50+ Brands Scaled with High-Converting Ads.</span>
        </div>

        {/* Main Headline with Rich Figma Gradient Badges */}
        <h1 className="hero-title">
          <div className="title-line">
            <span className="txt-regular">We</span>
            <span className="txt-regular">Launch</span>
            <span class="txt-bold">High</span>
            <span className="txt-bold">Performance</span>
            <span className="badge-gradient badge-ads">Ads</span>
            <span className="txt-black">That</span>
          </div>
          <div className="title-line">
            <span className="txt-black">Drive</span>
            <span className="badge-gradient badge-clicks">
              <span className="icon-square">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FC7820" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </span>
              <span>Clicks,</span>
            </span>
            <span className="badge-gradient badge-conversions">
              <span className="icon-square">
                <span className="emoji-icon">🎯</span>
              </span>
              <span>Conversions,</span>
            </span>
          </div>
          <div className="title-line">
            <span className="badge-gradient badge-revenue">
              <span>And Scalable Revenue</span>
              <span className="emoji-icon">💰</span>
            </span>
            <span className="txt-black">Fast</span>
          </div>
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-subtitle">
          Fast Ad Launches, one point of contact from strategy to reporting and campaigns built for 100% client satisfaction.
        </p>

        {/* Hero Standard CTA Pair (Hero primary is dark) */}
        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} isHero={true} />

        {/* Social Proof / Reviews Row */}
        <div className="hero-social-proof">
          <img src="/assets/hero_avatars.png" alt="Trusted Clients Avatars" className="hero-avatars-img" />
          <div className="proof-text">
            <span>Trusted by <strong>100+ People</strong></span>
            <span className="divider">|</span>
            <span className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>Rated 5/5 based on <strong>100+ Reviews</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
