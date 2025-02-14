import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menu = []}) => {
  return (
    <div className=''>
        {menu && menu.length > 0 ? <MenuList list={menu}/> : null }
      
    </div>
  )
}

export default TreeView
