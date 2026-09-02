import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Testimonials({ onBookCall, onContact }) {
  const secondaryTestimonials = [
    {
      quote: '“We were skeptical about paid channels, but the team delivered. Their creatives resonated with our audience and our CAC dropped significantly within the first month.”',
      author: 'Daniel Thompson',
      role: 'Founder',
      company: 'PeakFuel Nutrition'
    },
    {
      quote: '“I’ve worked with agencies before, but none moved this fast. They launched campaigns in days, and our lead quality skyrocketed.”',
      author: 'Amanda Johnson',
      role: 'Head of Growth',
      company: 'NextGen'
    },
    {
      quote: '“What stood out was their transparency — no jargon, no excuses, just results. Our cost per lead dropped by nearly 50%.”',
      author: 'Michael Carter',
      role: 'CEO',
      company: 'SwiftHire Solutions'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container testimonials-container">
        
        {/* Section Header */}
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-squircle-box">
              <span className="star-icon">⭐</span>
            </span>
          </div>
          <h2 className="section-title-clean">Don’t Just Take Our Word For It</h2>
          <p className="section-subtitle-clean">See how we’ve helped brands grow with ads that convert.</p>
        </div>

        {/* Testimonials 2-Row Grid */}
        <div className="testimonials-cards-layout">
          
          {/* Row 1: Featured Photo (Left) + Featured Quote Card (Right) */}
          <div className="testimonial-featured-row">
            <div className="featured-photo-card">
              <img 
                src="/assets/testimonial_james_miller.png" 
                alt="James Miller working on laptop" 
                className="featured-author-photo" 
              />
            </div>
            
            <div className="featured-quote-card">
              <p className="featured-quote-main">
                “LaunchAdsFast transformed our ad performance — in 60 days we saw consistent ROAS improvements and a clear uptick in sales.
                <br /><br />
                Communication was fast and every campaign felt tailored to our brand.”
              </p>
              
              <div className="featured-card-footer">
                <div className="stars-row">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="author-meta-text">
                  <strong>James Miller</strong>, Marketing Director, BrightNest Home
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Secondary Testimonial Cards */}
          <div className="testimonials-bottom-row">
            {secondaryTestimonials.map((item, idx) => (
              <div className="testimonial-small-card" key={idx}>
                <p className="small-card-quote">{item.quote}</p>
                <div className="small-card-footer">
                  <div className="stars-row">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="author-meta-text">
                    <strong>{item.author}</strong>, {item.role}, {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section Centered CTA Pair */}
        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} className="center-align-cta" />
        
      </div>
    </section>
  );
}
