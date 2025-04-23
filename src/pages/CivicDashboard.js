import React, { useState } from 'react';

const CivicDashboard = () => {
  const [claim, setClaim] = useState('');
  const [claimResult, setClaimResult] = useState(null);

  const handleCheckClaim = () => {
    // Simulate claim checking
    setClaimResult('This claim is misleading.');
  };

  return (
    <div className="civic-dashboard">
      <h2>Civic Dashboard</h2>
      <div className="election-timeline">
        <h3>Real-Time Election Timelines</h3>
        <p>Latest updates from Election Commission.</p>
      </div>
      <div className="claim-checker">
        <h3>Political Claim Checker</h3>
        <input
          type="text"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          placeholder="Enter a claim to check"
        />
        <button onClick={handleCheckClaim}>Check</button>
        {claimResult && <p>{claimResult}</p>}
      </div>
      <div className="voting-faq">
        <h3>Voting Rights FAQ</h3>
        <ul>
          <li>Who is eligible to vote? All citizens above 18.</li>
          <li>What ID is required? Voter ID or Aadhaar.</li>
          <li>How do I find my polling place? Visit election.gov.in.</li>
        </ul>
      </div>
      <div className="trending-misinformation">
        <h3>Trending Misinformation</h3>
        <ul>
          <li>Candidate vows to abolish federal income tax - Misleading</li>
          <li>Ballots found uncounted in multiple states - Questionable</li>
        </ul>
      </div>
    </div>
  );
};

export default CivicDashboard;