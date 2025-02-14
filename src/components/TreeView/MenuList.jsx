import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list}) => {
  return (
    <div className='w-36 text-center items-center flex flex-col bg-blue-300'>
        {list && list.map((item,index) => (
        <MenuItem key={index} item={item}/>
        ))}
    </div>
  )
}

export default MenuList
