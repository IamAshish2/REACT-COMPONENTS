import React from "react";

const ShowSuggesations = ({ filteredUsers, handleSuggesationClick }) => {
  return (
    <div className="w-44">
      {filteredUsers &&
        filteredUsers.length > 0 &&
        filteredUsers.map((name, index) => (
          <div
            key={index}
            onClick={() => {
              handleSuggesationClick(name);
            }}
            className="border w-full p-2"
          >
            {name}
          </div>
        ))}
    </div>
  );
};

export default ShowSuggesations;
