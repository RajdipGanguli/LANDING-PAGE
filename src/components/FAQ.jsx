import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqList = [
    {
      q: 'How Fast Can I See Results?',
      a: 'Most clients start seeing traction within the first 2–3 weeks after launch. The exact timeline depends on your budget, industry, and offer — but our goal is to generate measurable results as quickly as possible.'
    },
    {
      q: 'Why Is The First Month $600 And Then $300/Month?',
      a: 'The first month covers the complete setup — ad account creation, tracking integration, creative design, and campaign launch. After that, it’s $300/month for ongoing management, optimization, and scaling.'
    },
    {
      q: 'Do I Need A Big Budget To Work With You?',
      a: 'Not at all. We recommend a minimum ad spend of around $500–$1,000/month to start, but we can scale based on your comfort level and business goals.'
    },
    {
      q: 'Which Platforms Do You Run Ads On?',
      a: 'We specialize in Meta Ads (Facebook & Instagram), TikTok Ads, and Google Ads (Search, Display & YouTube). This mix covers brand awareness, engagement, and conversion-focused campaigns.'
    },
    {
      q: 'How Do I Know If The Ads Are Working?',
      a: 'You’ll receive clear, easy-to-understand performance reports. We focus on ROI-driven metrics — like revenue, ROAS, and conversions — not just vanity numbers like clicks and impressions.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container-box">
        <div className="section-header-styled text-center">
          <div className="header-emojis-row">
            <span className="emoji-circle-box">💬</span>
          </div>
          <h2 className="section-title-clean">Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion-list">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`faq-row-item ${isOpen ? 'active' : ''}`} key={idx}>
                <button className="faq-row-question" onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  <span className="faq-chevron-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div className="faq-row-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
