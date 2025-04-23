import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSetting } from '../redux/actions';

const Slider = ({ label, name, value, min, max }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSetting(name, e.target.value));
  };

  return (
    <div className="slider">
      <label>{label}</label>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
};

export default Slider;