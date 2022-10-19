import React, { useState } from 'react';
import './style.css';

const Check = ({ checked, onChange }) => {
  const handleChange = () => {
    onChange();
  };

  return (
    <button className="check" onClick={handleChange}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
