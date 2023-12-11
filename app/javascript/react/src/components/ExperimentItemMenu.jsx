import React from "react";
import "../../../../assets/stylesheets/experimentPage.css";

export default function ExperimentItemMenu({ experiment, handleOnClick }) {
  return (
    <div
      className="menuExperimentPage"
      key={experiment.name}
      onClick={() => handleOnClick(experiment.id, experiment.name)}
    >
      {experiment.name}

      <img
        src={
          experiment.disabled
            ? "/card-icons/play-unactivated.svg"
            : "/card-icons/play.svg"
        }
        alt="Executar"
        className="play-button-xp-page"
      />
    </div>
  );
}
