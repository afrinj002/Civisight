import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={logo} alt="Civisight Logo" />
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
        <Link to="/login" className="cta-button">
          Log In
        </Link>
        <Link to="/signup" className="cta-button">
          Sign Up
        </Link>
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;