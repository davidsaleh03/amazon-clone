import React, { useState } from "react";
import "./PriceRange.css";

const PriceRange = () => {
  const [max, setMax] = useState(100);
  return (
    <div className="PriceRange">
      <span className="priceLabel">
        Max Price ${max}
      </span>
      <div className="slider">
        <input
          type="range"
          min="1"
          max="70"
          value={max}
          onChange={(e) => setMin(Math.min(e.target.value, max - 1))}
        />
      </div>
    </div>
  );
};

export default PriceRange;
