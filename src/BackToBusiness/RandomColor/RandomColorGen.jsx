import React, { useState } from 'react'

const RandomColorGen = () => {
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    const  randomColorUtility = (length) =>  {
        return Math.floor(Math.random() * length);
    }
    const  handleCreateRandomHex = () => {
        const hex =  [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#";
        // generate random hex color values
        for(let i = 0; i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRandomRgb = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
  return (
    <div className='border border-gray-600 flex flex-col w-96 ml-auto mr-auto mt-5 h-screen'>
        <div>
        <button  onClick={() => {setTypeOfColor('hex')}} className='border w-28 m-1 bg-green-500 text-white font-bold'>Create Hex color</button>
        <button  onClick={() => {setTypeOfColor('rgb')}} className='border w-28 m-1 bg-green-500 text-white font-bold'>Create RGB color</button>
        <button  onClick={typeOfColor === 'hex' ? handleCreateRandomHex : handleCreateRandomRgb} className='border w-28 m-1 bg-green-500 text-white font-bold'>Generate Random Color</button>
        </div>
      <div style={{background:`${color}`}} className='border h-full '>
            <h1 className='text-white font-bold text-4xl flex text-center justify-center'>{typeOfColor === 'hex' ? 'HEX COLOR' : 'RGB COLOR'} {color}</h1>
      </div>
    </div>
  )
}

export default RandomColorGen
