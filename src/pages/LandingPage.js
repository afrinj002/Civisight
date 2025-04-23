import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Civisight</h1>
      <p>Defending the truth in the age of AI.</p>
      <p>Deepfake detection, real-time verification, and ethical aggregation.</p>
      <div className="landing-features">
        <div>
          <h3>Detect Deepfakes</h3>
          <p>Identify manipulated images and videos.</p>
        </div>
        <div>
          <h3>Verify News</h3>
          <p>Cross-check news with trusted sources in real time.</p>
        </div>
        <div>
          <h3>Aggregate Ethically</h3>
          <p>View balanced news from diverse sources.</p>
        </div>
      </div>
      <div className="landing-ctas">
        <Link to="/home" className="cta-button">
          Log In
        </Link>
        <Link to="/home" className="cta-button">
          Sign Up
        </Link>
        <Link to="/home" className="cta-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;