import { useState } from "react";
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection] = useState(false)
  const [multiSelect,setMultiSelect] = useState([])

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelection(id) {

    let cpyMultiple = [...multiSelect]
    const findINdexOfCurrentId = cpyMultiple.indexOf(id)

    if(findINdexOfCurrentId === -1){
        cpyMultiple.push(id)
    }else{
        cpyMultiple.splice(findINdexOfCurrentId,1)
    }

    setMultiSelect(cpyMultiple)

  }

  return (
    <>
      <div
        className="h-96 w-[80%] border mt-5 flex flex-col
         bg-white-400 ml-auto mr-auto"
      >
        <button onClick={() => setEnableMultiSelection(true)} className="border border-gray-500  mb-4 
        w-[50%] ml-auto mr-auto p-2 bg-green-500">
          Enable Multi Selection
        </button>

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => {
                handleSingleSelection(dataItem.id);
              }}
              className=" h-72"
              key={dataItem.id}
            >
              <h3 className=" p-4 bg-green-500  ">
                {dataItem.question}
              </h3>

                {
                    enableMultiSelection ? multiSelect.indexOf(dataItem.id)  !== -1 &&
                    <div className="">{dataItem.answer}</div> 
                    : selected === dataItem.id && <div className="">{dataItem.answer}</div> 
                }
              {/* {selected === dataItem.id  || multiSelect.indexOf(dataItem.id) !== -1 ? (<div className="">
                {dataItem.answer}
              </div>) : null} */}

             

            </div>
          ))
        ) : (
          <div>No questions found</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
