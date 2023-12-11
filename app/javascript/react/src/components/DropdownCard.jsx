import React, { useState } from "react";
import "../../../../assets/stylesheets/card.css";

import Modal from "./Modal";

export default function DropdownCard() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleModalOpen() {
    console.log("Open modal");
    setModalOpen(!modalOpen);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpen} className="dropdown-card">
        <img
          src="/card-icons/more-horizontal.svg"
          alt="Mais"
          className="drop-down"
        />
        {open ? (
          <ul className="dropdown-menu">
            <l1 className="dropdown-item">
              <div onClick={handleModalOpen}>Mais opções</div>
            </l1>
          </ul>
        ) : null}
      </button>
      {modalOpen && (
        <Modal isModalOpen={modalOpen} closeModal={handleModalClose} />
      )}
    </div>
  );
}
