import React, { useState } from 'react'

export const RandomColor = () => {
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g =  randomColorUtility(256);
        const b =  randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`)
    }

  return (
    <div  className='h-screen w-full ml-auto mr-auto  mt-5'>
        {/* <input className='h-full w-full' type="color" /> */}

        <button onClick={() => {setTypeOfColor('hex')}} className='border  ml-2 p-1 bg-green-300'>Create HEX color</button>

        <button onClick={() => {setTypeOfColor('rgb')}} className='border  ml-5 p-1 bg-green-300'>Create RGB color</button>

        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor :  handleCreateRandomRgbColor} className='border p-1 ml-5 bg-green-300'>Generate Random color</button>


        <div style={{background:`${color}`}} className=' flex justify-center flex-col items-center border border-red-700 mt-52 h-[60vh]'>
            <h1>{typeOfColor === 'hex' ? 'HEX COLOR' : 'RGB COLOR'}</h1>
            <h2>{color}</h2>
        </div>
    </div>
  )
}
