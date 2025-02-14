import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

const StarRating = () => {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);  

  const stars = 5;

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleMouseMove = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0); 
  };

  return (
    <div className="flex border h-36 w-50 mx-auto mt-4"> 
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <CiStar
            key={index}
            size={44}
            onClick={() => handleStarClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave} 
            className={`${rating >= index ? 'text-yellow-400' : hover >= index ? 'text-yellow-400' : 'text-black'}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;