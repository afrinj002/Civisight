import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <div className="news-card-meta">
        <span className={`trust-indicator ${article.trustStatus.toLowerCase()}`}>
          {article.trustStatus}
        </span>
        <span>Bias: {article.biasScore}/10</span>
      </div>
      <Link to={`/article/${article.id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
};

export default NewsCard;