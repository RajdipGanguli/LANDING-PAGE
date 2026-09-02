import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess(`Thank you, ${formData.name}! Message received. We'll be in touch.`);
    onClose();
  };

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-header">
          <span className="modal-badge">💬 Get in Touch</span>
          <h3>Send Us a Message</h3>
          <p>We typically respond in under 2 hours during business hours.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contactName">Your Name</label>
            <input
              type="text"
              id="contactName"
              placeholder="e.g. Sarah Connor"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Email Address</label>
            <input
              type="email"
              id="contactEmail"
              placeholder="sarah@company.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactMessage">How can we help your brand?</label>
            <textarea
              id="contactMessage"
              rows="4"
              placeholder="Tell us about your brand, current challenges, and goals..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn-cta btn-cta-gradient btn-full-width">
            <span>Send Message</span>
            <i className="fa-regular fa-paper-plane cta-icon-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
