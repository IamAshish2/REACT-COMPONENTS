// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

// export const StarRating = ({ noOfStars = 5 }) => {
//     const [rating,setRating] = useState(0);
//     const [hover,setHover] = useState(0);

//     function handleClick(getCurrentIndex){
//         setRating(getCurrentIndex)
//     }

//     function handleMouseEnter(getCurrentIndex){
//         setHover(getCurrentIndex);
//     }

//     function handleMouseLeave(){
//         setHover(rating)
//     }

//   return (
//     <div className="h-52 w-80 border border=red-500 flex ml-auto mr-auto mt-3">
//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1;

//         return <FaStar key={index} 
//             className={index <= (hover || rating) ? 'text-yellow-400' : 'text-black'}
//             onClick={() => {handleClick(index)}} 
//             onMouseMove={() => {handleMouseEnter(index)}}
//             onMouseLeave={() => {handleMouseLeave()}}
//             size={40}/>;
//       })}
//     </div>
//   );
// };

import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

export const StarRating = ({stars=5}) => {

    const [hover,setHover] = useState(0);
    const [rating,setRating] = useState(0);

    function handleOnClick(getCurrentIndex){
        // console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    function handleOnMouseMove(getCurrentIndex){
        // console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }

    function handleOnMouseLeave(){  
        setHover(rating)
    }

  return (
    <div className='h-60 w-80 ml-auto mr-auto mt-5 border border-red-500 flex'>
        {
            [...Array(stars)].map((_,index) => {
                index += 1;
               return  <FaStar key={index}   className={index <= (hover || rating) ? 'text-yellow-400' : 'text-black'}
                              onClick={() => {handleOnClick(index)}}
                            onMouseMove={() => {handleOnMouseMove(index)}}
                            onMouseLeave={handleOnMouseLeave}
                            size={40}/>   
            })
        }
    </div>
  )
}
