import React, { useState } from 'react';

export default function Campaigns() {
  const [activeSlide, setActiveSlide] = useState(0);

  const campaignImages = [
    { src: '/assets/campaign_1_abstract.png', alt: 'Creative Ad Visuals' },
    { src: '/assets/campaign_2_skincare.png', alt: 'Beauty & Skincare Collection' },
    { src: '/assets/campaign_3_shoes.png', alt: 'Footwear & Sneakers' }
  ];

  return (
    <section className="campaigns-section" id="campaigns">
      <div className="container">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">💲</span>
            <span className="emoji-circle-box">🥪</span>
            <span className="emoji-circle-box">📈</span>
          </div>
          <h2 className="section-title-clean">Campaigns We’ve Run for Brands Like Yours</h2>
          <p className="section-subtitle-clean">Real campaigns. Real results. Real impact.</p>
        </div>

        <div className="campaigns-showcase-container">
          <div className="campaigns-grid-track">
            {campaignImages.map((camp, idx) => (
              <div className="campaign-showcase-card" key={idx}>
                <img src={camp.src} alt={camp.alt} className="campaign-img-full" />
              </div>
            ))}
          </div>

          {/* Carousel Indicator Pill */}
          <div className="campaign-dots-indicator">
            <span 
              className={`indicator-bar ${activeSlide === 0 ? 'active' : ''}`}
              onClick={() => setActiveSlide(0)}
            ></span>
            <span 
              className={`indicator-bar ${activeSlide === 1 ? 'active' : ''}`}
              onClick={() => setActiveSlide(1)}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
