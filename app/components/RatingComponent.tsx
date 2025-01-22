"use client"
import React, { useState } from "react";
import { Star } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const RatingComponent = () => {
  const [rating, setRating] = useState(4.2); 
  const [totalRatings, setTotalRatings] = useState(67); 

  const handleRatingIncrease = () => {
    setRating((prev) => parseFloat((prev + 0.1).toFixed(1))); 
    setTotalRatings((prev) => prev + 1); 
  };

  return (
    <div className="mb-6 flex items-center gap-3 md:mb-10">
      <Button
        className="rounded-full gap-x-2"
        onClick={handleRatingIncrease} 
      >
        <span className="text-sm">{rating}</span>
        <Star className="h-5 w-5" />
      </Button>
      <span className="text-sm text-gray-500 transition duration-100">
        {totalRatings} Ratings
      </span>
    </div>
  );
};

export default RatingComponent;