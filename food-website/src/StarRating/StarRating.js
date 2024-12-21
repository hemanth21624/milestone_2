import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index + 1 <= Math.floor(rating);
    const half = !filled && index + 0.5 < rating;

    return (
      <span key={index} className={`star ${filled ? 'filled' : ''} ${half ? 'half' : ''}`}>
        ★
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
