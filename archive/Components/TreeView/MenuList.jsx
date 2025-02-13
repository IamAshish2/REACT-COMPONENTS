import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list = []}) => {
  return (
    <ul className='w-44 p-3 flex flex-col gap-6'>
        {
            list && list.length  ? 
                list.map(listItem => <MenuItem item={listItem}/> )
            : null
        }
      
    </ul>
  )
}

export default MenuList
