import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, checked, onChange }) => {
  return (
    <div className="topping">
      <Check
        checked={topping.selected}
        vegan={topping.vegan}
        onChange={onChange}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
