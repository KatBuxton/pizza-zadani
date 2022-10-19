import React from 'react';

export const Header = ({ veganChange }) => {
  const handleChange = () => {
    veganChange();
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All ingredients</option>
      <option value="vegan">Only vegan ingredients</option>
    </select>
  );
};
