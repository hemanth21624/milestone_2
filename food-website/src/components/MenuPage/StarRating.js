

import React, { useState } from 'react';
import './starRating.css'; 

const StarRating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${rating > index ? 'filled' : ''}`}
          onClick={() => handleRate(index + 1)}
          onMouseOver={() => setRating(index + 1)}
          onMouseOut={() => setRating(rating)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
