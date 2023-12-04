import React, { useState } from "react";
import "../../../../assets/stylesheets/modal.css";

export default function Modal({ isModalOpen, closeModal }) {
  console.log(isModalOpen);

  return (
    <div>
      {isModalOpen && (
        <div onClick={closeModal} className="modal-overlay">
          <div onClick={(e) => e.stopPropagation()} className="modal">
            <button className="close-button" onClick={closeModal}>
              <img
                className="close"
                src={"/modal_close.svg"}
                alt="Close"
                onClick={closeModal}
              />
            </button>
            <button onClick={() => handleButtonClick("battery")}>
              <img
                className="battery"
                src={"/modal_battery.svg"}
                alt="Battery"
              />
            </button>
            <button onClick={() => handleButtonClick("location")}>
              <img
                className="location"
                src={"/modal_location.svg"}
                alt="Location"
              />
            </button>
            <button onClick={() => handleButtonClick("speed")}>
              <img className="speed" src={"/modal_speed.svg"} alt="Speed" />
            </button>
            <button onClick={() => handleButtonClick("skills")}>
              <img className="skills" src={"/modal_skills.svg"} alt="Skills" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
