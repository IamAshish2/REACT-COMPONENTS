import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [itemClicked, setItemClicked] = useState(null);
  const [selectMultiple, setSelectedMultiple] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleItemClicked(id) {
    setItemClicked(id === itemClicked ? null : id);
  }

  function handleMultipleClicked(id) {
    if (selectMultiple) {
      const checkIfIdIsPresent = multiSelection.includes(id);
      if (checkIfIdIsPresent) {
        const arr = multiSelection.filter((item) => item !== id);
        setMultiSelection(arr);
      } else {
        setMultiSelection((prev) => [...prev, id]);
      }
    }
  }

  return (
    <div className="h-[60vh] mt-56 w-80 flex flex-col justify-center items-center gap-4 mr-auto ml-auto">
      <div
        onClick={() => {
          setSelectedMultiple(!selectMultiple);
        }}
        className="border p-4 bg-blue-600 rounded-full"
      >
        Select multiple
      </div>
      {data.map((d) => (
        <div key={d.id} className="w-80">
          <div
            onClick={() => {
              selectMultiple
                ? handleMultipleClicked(d.id)
                : handleItemClicked(d.id);
            }}
          >
            <div className={`border border-gray-600  mt-5 p-4 flex-col`}>
              {" "}
              <div className="flex justify-between">
                {d.question} <span>+</span>
              </div>
              {selectMultiple
                ? multiSelection.indexOf(d.id) !== -1 && (
                    <div className=" mt-4 text-start">{d.answer}</div>
                  )
                : itemClicked !== null &&
                  itemClicked == d.id && (
                    <div className=" mt-4 text-start">{d.answer}</div>
                  )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
