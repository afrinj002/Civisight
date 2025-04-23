import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import Slider from '../components/Slider';
import { articles } from '../data/staticData';

const HomeFeed = () => {
  const settings = useSelector((state) => state.settings);

  return (
    <div className="home-feed">
      <h2>Home Feed</h2>
      <div className="filters">
        <Slider
          label="Exposure to Opposing Views"
          name="opposingViews"
          value={settings.opposingViews}
          min="0"
          max="10"
        />
        <Slider
          label="Sensationalism Filter"
          name="sensationalism"
          value={settings.sensationalism}
          min="0"
          max="10"
        />
      </div>
      <div className="news-grid">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;