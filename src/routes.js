import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomeFeed from './pages/HomeFeed';
import ArticleDetail from './pages/ArticleDetail';
import VerificationDashboard from './pages/VerificationDashboard';
import CivicDashboard from './pages/CivicDashboard';
import Settings from './pages/Settings';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomeFeed />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/verify" element={<VerificationDashboard />} />
      <Route path="/civic" element={<CivicDashboard />} />
      <Route path="/settings" element={<Settings />} />
    </ReactRoutes>
  );
};

export default Routes;