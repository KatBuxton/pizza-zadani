import React from 'react';

export const Header = ({ veganChange, veganOnly }) => {
  const handleChange = () => {
    veganChange();
  };

  return (
    <select onChange={handleChange}>
      <option selected={!veganOnly} value="all">
        All ingredients
      </option>
      <option selected={veganOnly} value="vegan">
        Only vegan ingredients
      </option>
    </select>
  );
};
