import React from 'react';
import SectionCtaPair from './SectionCtaPair';

export default function Services({ onBookCall, onContact }) {
  const servicesData = [
    {
      title: 'Meta Ads',
      image: '/assets/service_meta.png',
      description: 'With billions of daily users, Meta platforms are where attention lives. We build highly targeted ad campaigns that combine data-driven strategies with scroll-stopping creatives. From brand awareness to conversion-focused funnels, we ensure every dollar spent delivers measurable growth.'
    },
    {
      title: 'Google Ads',
      image: '/assets/service_google.png',
      description: 'When customers are actively searching, you need to show up first. Our Google Ads strategies cover search, display, and YouTube to capture high-intent traffic. With smart bidding, keyword optimization, and clear tracking, we make sure your ads not only get seen but also deliver real, revenue-driving results.'
    },
    {
      title: 'Tiktok Ads',
      image: '/assets/service_tiktok.png',
      description: 'TikTok is today’s fastest-growing platform — and we know how to harness it. Our team creates native-style ads that blend seamlessly with the feed, while still driving clicks and conversions. By pairing creative trends with proven performance strategies, we turn TikTok into a powerful growth channel for your brand.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">🤝</span>
            <span className="emoji-circle-box">⚡</span>
          </div>
          <h2 className="section-title-clean">How Can We Help You?</h2>
          <p className="section-subtitle-clean">Performance-driven ad solutions designed to grow your business.</p>
        </div>

        <div className="services-cards-grid">
          {servicesData.map((svc) => (
            <div className="service-card-item" key={svc.title}>
              <div className="service-media-holder">
                <img src={svc.image} alt={svc.title} className="service-media-img" />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-heading">{svc.title}</h3>
                <p className="service-card-copy">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionCtaPair onBookCall={onBookCall} onContact={onContact} className="center-align-cta" />
      </div>
    </section>
  );
}
