import React from 'react';

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className={`toast-notification ${isVisible ? 'active' : ''}`}>
      <i className="fa-solid fa-circle-check" style={{ color: '#24d240' }}></i>
      <span>{message}</span>
    </div>
  );
}
