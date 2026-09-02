import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Testimonials({ onBookCall, onContact }) {
  const secondaryTestimonials = [
    {
      quote: '“We were skeptical about paid channels, but the team delivered. Their creatives resonated with our audience and our CAC dropped significantly within the first month.”',
      author: 'Daniel Thompson',
      role: 'Founder, PeakFuel Nutrition'
    },
    {
      quote: '“I’ve worked with agencies before, but none moved this fast. They launched campaigns in days, and our lead quality skyrocketed.”',
      author: 'Amanda Johnson',
      role: 'Head of Growth, NextGen'
    },
    {
      quote: '“What stood out was their transparency — no jargon, no excuses, just results. Our cost per lead dropped by nearly 50%.”',
      author: 'Michael Carter',
      role: 'CEO, SwiftHire Solutions'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">⭐</span>
          </div>
          <h2 className="section-title-clean">Don’t Just Take Our Word For It</h2>
          <p className="section-subtitle-clean">See how we’ve helped brands grow with ads that convert.</p>
        </div>

        <div className="testimonials-main-layout">
          {/* Big Featured Card */}
          <div className="testimonial-hero-card">
            <div className="hero-card-left">
              <img src="/assets/testimonial_james_miller.png" alt="James Miller" className="featured-client-photo" />
            </div>
            <div className="hero-card-right">
              <p className="featured-quote-paragraph">
                “LaunchAdsFast transformed our ad performance — in 60 days we saw consistent ROAS improvements and a clear uptick in sales. Communication was fast and every campaign felt tailored to our brand.”
              </p>
              <div className="stars-rating-row">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="author-credits-row">
                <strong>James Miller</strong>, Marketing Director, BrightNest Home
              </div>
            </div>
          </div>

          {/* 3 Secondary Testimonials Grid */}
          <div className="testimonials-triplet-grid">
            {secondaryTestimonials.map((t, idx) => (
              <div className="testimonial-small-card" key={idx}>
                <p className="small-card-quote">{t.quote}</p>
                <div className="small-card-bottom">
                  <div className="stars-rating-row">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="author-credits-row">
                    <strong>{t.author}</strong>, {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} className="center-align-cta" />
      </div>
    </section>
  );
}
