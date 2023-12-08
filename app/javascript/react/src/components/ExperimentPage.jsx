import React from "react";
import Card from "./Card";
import "../../../../assets/stylesheets/experimentPage.css";
import HeaderExperimentPage from "./HeaderExperimentPage";
import "./ToggleCard.js";

export default function ExperimentPage() {
  return (
    <div className="container">
      <div className="menuExperimentPage">
        Experimento 2
        <img
          src="/card-icons/play-unactivated.svg"
          alt="Executar"
          className="play-button-xp-page"
        />
      </div>
      <div className="containerExperimentPage">
        <HeaderExperimentPage />
        <div className="list-cards">
          <Card />
        </div>
      </div>
    </div>
  );
}
