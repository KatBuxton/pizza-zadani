import React from 'react';
import './style.css';
import { usePrefs } from '../../prefs-context';

const Check = ({ checked, vegan, onChange }) => {
  const { veganOnly } = usePrefs();

  const handleChange = () => {
    onChange(!checked);
  };

  return veganOnly ? (
    <button
      className={vegan ? 'check--disabled' : 'check'}
      onClick={handleChange}
    >
      {checked ? '✓' : ''}
    </button>
  ) : (
    <button className="check" onClick={handleChange}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
