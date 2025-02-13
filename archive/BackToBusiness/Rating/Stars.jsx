import React, { useState } from 'react'
import { BiStar } from 'react-icons/bi'
import { CiStar } from "react-icons/ci";
const Stars = ({stars = 5}) => {
  const [hover,setHover] = useState(0);
  const [rating,setRating] = useState(0);

  const handleClick = (index) => {
      setRating(index);
  }

  const handleMouseMove = (index) => {
    setHover(index);
  }

  const handleMouseLeave = () => {
    setHover(rating);
  }

  return (
    <div className=' flex border h-36 w-50 ml-auto mr-auto mt-4'>
      {
        [...Array(stars)].map((_,index) => {
          index += 1
          return  <CiStar  key= {index}
           onClick={() => {handleClick(index)}}
          onMouseMove={() => {handleMouseMove(index)}} 
          onMouseLeave={() => {handleMouseLeave()}}
          size={40}
          className={index <= (hover || rating) ? 
            'text-yellow-400' : "text-black"}/>
          })
      }
    </div>
  )
}

export default Stars
