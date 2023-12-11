import React, { useState } from "react";
import "../../../../assets/stylesheets/card.css";

export default function PlayButton({ disabled }) {
  const [canRun, setCanRun] = useState(false);

  function handlePlayButton() {
    if (!disabled) {
      setCanRun(!canRun);
    }
  }

  return (
    <div onClick={handlePlayButton}>
      {disabled ? (
        <img
          src="/card-icons/play-unactivated.svg"
          alt="Executar"
          className="play-button"
        />
      ) : (
        <img
          src={canRun ? "/card-icons/running-stop.svg" : "/card-icons/play.svg"}
          alt="Executar"
          className={canRun ? "running-button" : "play-button"}
        />
      )}
    </div>
  );
}
