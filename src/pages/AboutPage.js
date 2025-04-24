import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Civisight</h2>
      <p>
        <strong>Mission:</strong> Civisight is dedicated to defending the truth in the digital age by empowering citizens with tools to combat misinformation, deepfakes, and biased news aggregation. In an era where AI-generated content threatens democratic processes, Civisight stands as a trusted platform to restore public trust and promote informed civic engagement.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Deepfake Detection:</strong> Utilizes advanced computer vision to identify manipulated images and videos, flagging inconsistencies with explainable AI for transparency.
        </li>
        <li>
          <strong>Real-Time News Verification:</strong> Cross-checks news headlines and claims against trusted sources using natural language processing and fact-checking APIs, providing reliability scores in real time.
        </li>
        <li>
          <strong>Ethical Aggregation:</strong> Curates balanced news from diverse sources, offering bias detection scores and user-controlled personalization to avoid echo chambers.
        </li>
      </ul>
      <h3>Relevance to Elections and Civic Engagement</h3>
      <p>
        Civisight addresses the growing challenge of AI-generated fake news and deepfakes during elections, which erode public trust and polarize discourse. By providing real-time detection and verification tools, it helps citizens—especially low-literacy and marginalized groups—navigate misinformation. During elections, features like the Civic Dashboard offer verified updates from electoral commissions and flag trending disinformation, ensuring fair and informed voting.
      </p>
      <h3>Societal Impact and Ethical Considerations</h3>
      <p>
        Civisight promotes informed decision-making and reduces polarization, bridging the knowledge divide for underserved communities. Ethically, it avoids censorship by providing context, ensures transparency with open-source algorithms, and protects privacy with anonymized data processing. Regular audits by independent fact-checkers maintain accountability, aligning with global efforts to safeguard democracy.
      </p>
    </div>
  );
};

export default AboutPage;