import React from 'react';

export default function SectionCtaPair({ onBookCall, onContact, isHero = false, className = '' }) {
  return (
    <div className={`cta-button-pair ${className}`}>
      <button 
        className={`btn-cta ${isHero ? 'btn-cta-dark' : 'btn-cta-gradient'}`}
        onClick={onBookCall}
      >
        <i className="fa-regular fa-calendar-check cta-icon-left"></i>
        <span>Book a Call</span>
        <i className="fa-solid fa-arrow-right cta-icon-right"></i>
      </button>
      <button 
        className="btn-cta btn-cta-outline"
        onClick={onContact}
      >
        <span>Contact Us</span>
      </button>
    </div>
  );
}
