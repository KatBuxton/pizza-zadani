import React from 'react';

export const Header = ({ veganChange }) => {
  const handleChange = () => {
    veganChange();
    console.log('vegan change');
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All ingredients</option>
      <option value="vegan">Only vegan ingredients</option>
    </select>
  );
};
