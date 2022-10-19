import React from 'react';

export const Header = () => {
  return (
    <select value="option">
      <option value="vegan">Only vegan ingredients</option>
      <option value="all">All ingredients</option>
    </select>
  );
};
