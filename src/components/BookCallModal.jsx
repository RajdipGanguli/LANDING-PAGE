import React, { useState } from 'react';

export default function BookCallModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    platform: 'meta',
    budget: '500-2k'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess(`Thank you, ${formData.name}! Your discovery call is scheduled.`);
    onClose();
  };

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-header">
          <span className="modal-badge">⚡ Instant Scheduling</span>
          <h3>Book Your Discovery Call</h3>
          <p>Choose a convenient time with our growth strategy team.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookName">Your Name</label>
            <input
              type="text"
              id="bookName"
              placeholder="e.g. Alex Johnson"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookEmail">Business Email</label>
            <input
              type="email"
              id="bookEmail"
              placeholder="alex@yourbrand.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookWebsite">Brand Website / Store URL</label>
            <input
              type="url"
              id="bookWebsite"
              placeholder="https://yourbrand.com"
              required
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bookPlatform">Preferred Platform</label>
              <select
                id="bookPlatform"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              >
                <option value="meta">Meta Ads (FB/IG)</option>
                <option value="google">Google & YouTube Ads</option>
                <option value="tiktok">TikTok Ads</option>
                <option value="all">Full Omnichannel Stack</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bookBudget">Monthly Ad Spend</label>
              <select
                id="bookBudget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="500-2k">$500 – $2,000 / mo</option>
                <option value="2k-10k">$2,000 – $10,000 / mo</option>
                <option value="10k-50k">$10,000 – $50,000 / mo</option>
                <option value="50k+">$50,000+ / mo</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn-cta btn-cta-gradient btn-full-width">
            <i className="fa-regular fa-calendar-check cta-icon-left"></i>
            <span>Confirm Call Booking</span>
            <i className="fa-solid fa-arrow-right cta-icon-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
