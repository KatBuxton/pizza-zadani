import React from 'react';
import './style.css';
import { usePrefs } from '../../prefs-context';

const Check = ({ checked, onChange }) => {
  const { veganOnly } = usePrefs();

  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <button
      className={veganOnly ? 'check--disabled' : 'check'}
      onClick={handleChange}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
