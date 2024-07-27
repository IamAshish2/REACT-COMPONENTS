import React, {useState} from 'react'

import data from './data'

export const Accordian = () => {
    // const [open,setOpen] = useState(false);
    const [selected,setSelected] = useState(null)
    const [multiple,setMultiple] = useState([])
    const [isMultipleSelected,setMultipleSelected] = useState(false)

    function handleSingleSelected(id){
        setSelected(id === selected ? null : id)
    }

    function handleMultiple(id){
        const arr = [...multiple]
        const findIndexofElement = arr.indexOf(id);

        if(findIndexofElement=== -1){
            arr.push(id)
        }else{
            arr.splice(findIndexofElement,1)
        }
        setMultiple(arr)
    }

  return (
    <div className='border border-green-500 h-[60vh] w-[60%] ml-auto mr-auto mt-4 p-2'>
            <button onClick={() => {setMultipleSelected(true)}} className='ml-auto mr-auto border p-4 bg-green-500 border-gray-500'>Enable multiple Selection</button>
    <div>
        {data && data.length > 0 ? (data.map((element) => (
            <>
            
             <div onClick={ isMultipleSelected ? () => {handleMultiple(element.id)} : () =>  {handleSingleSelected(element.id)}} className='border border-gray-600 flex mt-5 p-4'>{element.question}</div>
            
                {isMultipleSelected ? multiple.indexOf(element.id) !== -1 && <div>{element.answer}</div>
                 : selected === element.id &&  <div>{element.answer}</div>}
            
            </>        
        ))) : (
            <div>No questions found</div>
          )}
    </div>
    
    </div>
  )
}
