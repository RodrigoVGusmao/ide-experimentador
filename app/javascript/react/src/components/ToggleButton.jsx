import React, { useState } from "react";
import "../../../../assets/stylesheets/card.css";
import { useExperiments } from "../experimentsContext";

export default function ToggleButton({ activated, getDesactivated }) {
  // const [desactivated, setDesactivated] = useState(false);

  function handleToggleButton() {
    getDesactivated(!activated);
  }

  return (
    <div onClick={handleToggleButton}>
      {activated ? (
        <img
          src="/card-icons/toggle-activated.svg"
          alt="Ativar"
          className="toggle-switch"
        />
      ) : (
        <img
          src="/card-icons/toggle-right.svg"
          alt="Ativar"
          className="toggle-switch"
        />
      )}
    </div>
  );
}
