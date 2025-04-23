import React, { useState } from 'react';

const VerificationInput = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = () => {
    // Simulate verification
    setResult({
      credibilityScore: 70,
      factCheckedUrl: 'https://factcheck.org/sample-article',
    });
  };

  return (
    <div className="verification-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL, image, or video"
      />
      <button onClick={handleVerify}>Verify</button>
      {result && (
        <div className="verification-result">
          <p>Credibility Score: {result.credibilityScore}%</p>
          <p>
            Fact-Checked Version:{' '}
            <a href={result.factCheckedUrl} target="_blank" rel="noopener noreferrer">
              {result.factCheckedUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default VerificationInput;