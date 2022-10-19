import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings);

  const handleChecked = (newValue, i) => {
    setChecked((prevState) => {
      const checkedArr = [...prevState];
      checkedArr[i].selected = newValue;
      return checkedArr;
    });
  };

  let toppingsCount = 0;
  checked.forEach((topping) => (toppingsCount += topping.selected));

  let toppingsPrice = 0;
  checked.forEach((topping) => (toppingsPrice += topping.price));

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {toppingsCount}, total price: {toppingsPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, i) => (
          <Topping
            topping={topping}
            key={topping.name}
            onChange={(newValue) => handleChecked(newValue, i)}
            checked={topping.selected}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
