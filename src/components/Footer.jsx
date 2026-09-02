import React from 'react';

export default function Footer({ onShowPrivacy }) {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#hero" className="brand-logo">
              <span className="logo-badge-circle">
                <span className="logo-letter">L</span>
              </span>
              <span className="logo-text">LaunchAdsFast<span className="dot">.</span></span>
            </a>
            <p className="footer-tagline">
              We launch high performance ads that drive clicks, conversions and scalable revenue fast.
            </p>
          </div>

          {/* Page Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Page</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#services">How We Help You</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Socials</h4>
            <ul className="footer-nav-list">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i> Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i> YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">© 2025 LaunchAdsFast. All rights reserved.</p>
          <div className="legal-text-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onShowPrivacy(); }}>
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
