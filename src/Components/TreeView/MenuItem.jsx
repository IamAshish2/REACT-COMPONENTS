import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus,FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({...displayCurrentChildren,
        [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]})
  };

  return (
    <li className=" ">
      <div className="flex ">
        <span className="">{item.label}</span>
        {item && item.children && item.children.length ? <span onClick={() => {handleToggleChildren(item.label)}}>{
                displayCurrentChildren[item.label] ? <FaMinus className="ml-3 cursor-pointer"/> : <FaPlus className="ml-3 cursor-pointer"/>
            }</span> : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
