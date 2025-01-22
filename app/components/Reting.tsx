"use client"
import React, { useState, useEffect } from "react";

const Rating = () => {
  // Random rating between 1 to 5
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {/* Star Rating */}
      {[1, 2, 3, 4, 5].map((value) => (
        <svg
          key={value}
          xmlns="http://www.w3.org/2000/svg"
          fill={value <= rating ? "orange" : "gray"}
          viewBox="0 0 24 24"
          width="20"
          height="20"
          onClick={() => handleClick(value)}
          className="cursor-pointer"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;