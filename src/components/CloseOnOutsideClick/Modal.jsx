import { useReducer, useRef, useState } from "react";
import Model from "../CustomModalPopup/Model";
import useOnClickOutside from "./useOnClickOutside";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setOpenModal(false);
  });

  function handleOutsideClickEvent(e) {}

  return (
    <div
      ref={ref}
      className="flex  flex-col items-center justify-center mt-3"
      onClick={handleOutsideClickEvent}
    >
      <div>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
          className="border w-32 p-2 mb-2"
        >
          Open Modal
        </button>
      </div>
      {openModal && (
        <div>
          <Model
            id={"custom-id"}
            header={<h1>Customized Header</h1>}
            footer={<h1>Customized Footer</h1>}
            body={<div>Customized body</div>}
          />
        </div>
      )}
    </div>
  );
};

export default Modal;
