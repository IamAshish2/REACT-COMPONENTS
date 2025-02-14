import React, { useState } from "react";
import Model from "./Model";

const ParentModelPopper = () => {
  const [openModal, setOpenModal] = useState(false);

  function onClose() {
    setOpenModal(!openModal);
  }

  return (
    <div className="flex flex-col items-center align-middle justify-center mt-4">
      <button
        onClick={onClose}
        className={`${openModal ? "hidden" : "visible border border-s-2 p-2"}`}
      >
        Open Modal
      </button>
      {openModal && (
        <Model
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ParentModelPopper;
