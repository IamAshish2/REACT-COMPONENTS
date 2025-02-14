import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <div>
      <div className="flex">
        {item.label}

        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => {
              handleToggleChildren(item.label);
            }}
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={16} />
            ) : (
              <FaPlus color="#fff" size={16} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </div>
  );
};

export default MenuItem;
