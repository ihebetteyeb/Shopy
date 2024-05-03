import React from "react";
import "./ItemQuantity.css";
import PropTypes from "prop-types";

const ItemQuantity = ({ initialValue, maxValue, onValueChange }) => {
  const decrement = () => {
    if (initialValue > 0) onValueChange(initialValue - 1);
  };

  const increment = () => {
    if (initialValue < maxValue) onValueChange(initialValue + 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= maxValue) {
      onValueChange(value);
    }
  };

  return (
    <div>
      <button onClick={decrement}>
        <img className="counter" src="src/assets/minus.png" />
      </button>
      <input
        className="counter-input"
        type="text"
        value={initialValue}
        onChange={handleChange}
      />
      <button onClick={increment}>
        <img className="counter" src="src/assets/plus.png" />
      </button>
    </div>
  );
};

ItemQuantity.propTypes = {
  initialValue: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  maxValue: PropTypes.number,
};

export default ItemQuantity;
