import React, { useState } from "react";
import data from "../../accordian/data";
const Accord = () => {
  const [selected, setSelected] = useState(null);
  const [isSelectMultiple, setMultipleSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelected = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelected = (currentElement) => {
    const elements = [...multiple];
    const indexOfCurrEle = multiple.indexOf(currentElement);
    if (indexOfCurrEle === -1) {
      elements.push(currentElement);
    } else {
      elements.splice(indexOfCurrEle, 1);
    }
    setMultiple(elements);
  };

  const setMultipleSelect = () => {
    setMultipleSelected(!isSelectMultiple);
  };

  return (
    <div className="h-[40rem] mt-4 w-96 ml-auto mr-auto border border-gray-600 flex flex-col items-center justify-evenly">
      <div
        onClick={() => {
          setMultipleSelect();
        }}
        className="border mt-1  p-2 bg-blue-800 text-white font-bold rounded-sm"
      >
        Enable Multiple Selection
      </div>

      {data &&
        data.map((element) => (
          <>
            <div
              key={element.id}
              onClick={
                isSelectMultiple
                  ? () => handleMultipleSelected(element.id)
                  : () => handleSelected(element.id)
              }
              className="border bg-red-900 text-white h-20  w-full flex items-center justify-evenly gap-10"
            >
              {element.question}
              <div className="">+</div>
            </div>
            {isSelectMultiple ? (
              multiple.indexOf(element.id) !== -1 && <div>{element.answer}</div>
            ) : selected == element.id ? (
              <div>{element.answer}</div>
            ) : null}
          </>
        ))}
    </div>
  );
};

export default Accord;
