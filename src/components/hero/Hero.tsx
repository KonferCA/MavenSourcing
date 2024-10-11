import React from 'react';
import './Hero.css';
import backgroundVideo from '@assets/background-video.mp4';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">M</span>alleable, <span className="highlight">V</span>aliant, <span className="highlight">N</span>oble
        </h1>
        <p className="hero-subtitle">A global sourcing company</p>
      </div>
    </div>
  );
};

export { Hero };