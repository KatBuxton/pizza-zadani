import React, { useState } from 'react';
import './style.css';

const Check = ({ checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <button className="check" onClick={handleChange}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
