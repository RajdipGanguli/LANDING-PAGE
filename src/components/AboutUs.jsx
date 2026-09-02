import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="container text-center">
        <div className="section-header-styled">
          <h2 className="section-title-clean">
            About Us
            <span className="wavy-underline">
              <svg width="150" height="12" viewBox="0 0 150 12" fill="none">
                <path d="M2 9C35 3 115 1 148 10" stroke="#FC7820" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="about-card-box">
          <p className="about-content-text">
            At <strong>LaunchAdsFast.</strong>, we believe great advertising is more than just impressions and clicks — it’s about building brands and driving measurable growth. Our team blends creative storytelling with data-driven strategies to craft campaigns that actually convert. From startups to established businesses, we’ve helped brands scale revenue, reach new audiences, and stay ahead in the fast-changing digital landscape. What sets us apart is our obsession with results, transparent communication, and the speed at which we execute. We don’t just run ads — we become your growth partner."
          </p>
        </div>
      </div>
    </section>
  );
}
