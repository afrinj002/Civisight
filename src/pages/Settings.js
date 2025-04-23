import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';

const Settings = () => {
  const settings = useSelector((state) => state.settings);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-sliders">
        <Slider
          label="Bias Tolerance"
          name="biasTolerance"
          value={settings.biasTolerance}
          min="0"
          max="10"
        />
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
      <div className="settings-links">
        <a href="#">Contact Us</a>
        <a href="#">Help</a>
        <a href="#">Log Out</a>
      </div>
    </div>
  );
};

export default Settings;