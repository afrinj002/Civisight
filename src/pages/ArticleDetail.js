import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/staticData';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-detail">
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.fullText}</p>
        <div className="article-meta">
          <span className={`trust-indicator ${article.trustStatus.toLowerCase()}`}>
            {article.trustStatus}
          </span>
          <span>Bias Score: {article.biasScore}/10</span>
        </div>
        <button className="why-flagged">
          Why Flagged? (80% chance of deepfake)
        </button>
      </div>
      <div className="related-sources">
        <h3>Verified Sources</h3>
        <ul>
          <li>
            <a href="https://example.com/source1" target="_blank" rel="noopener noreferrer">
              Governor Candidate Responds to Fraud Accusations
            </a>
          </li>
          <li>
            <a href="https://factcheck.org/sample" target="_blank" rel="noopener noreferrer">
              Fact-Check of Voter Fraud Claims
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleDetail;