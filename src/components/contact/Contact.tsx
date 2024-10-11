import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-title">How To Reach Us?</h2>
        <div className="contact-text">
          <p>
            Shoot us an email at:
          </p>
          <p className="contact-email">
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:rao@mavensourcing.ca">rao@mavensourcing.ca</a>
          </p>
          <p>We should get back to you in a timely manner.</p>
        </div>
      </div>
    </div>
  );
};

export { Contact };