import React, { useState } from "react";
import "../../../../assets/stylesheets/card.css";

export default function ToggleButton() {
  const [desactivated, setDesactivated] = useState(false);

  function handleToggleButton() {
    setDesactivated(!desactivated);
  }

  return (
    <div onClick={handleToggleButton}>
      {desactivated ? (
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
