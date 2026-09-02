import React, { useState, useEffect } from 'react';

export default function Navbar({ onBookCall }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset + 120;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'FAQ', href: '#faq', id: 'faq' }
  ];

  return (
    <header className="navbar-wrapper">
      <div className="navbar container">
        <a href="#hero" className="brand-logo">
          <span className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#FC7820" />
              <path d="M7 16V8L16 16H7Z" fill="white" />
            </svg>
          </span>
          <span className="logo-text">LaunchAdsFast<span className="dot">.</span></span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="btn-nav" onClick={onBookCall}>
            <i className="fa-solid fa-phone-volume"></i>
            <span>Book a Call</span>
          </button>
          <button
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
