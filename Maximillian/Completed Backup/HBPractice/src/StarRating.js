import React, { useState } from 'react';

export const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <span style={{ color: selected ? 'orange' : 'gray' }} onClick={onClick}>
    &#9733;
  </span>
);
