import React from 'react'
import MenuList from './MenuList'
const TreeView = ({menus = []}) => {
  return (
    <div className='bg-blue-400 w-52 h-screen'>
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView
