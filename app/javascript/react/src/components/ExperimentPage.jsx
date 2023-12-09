import React from "react";
import Card from "./Card";
import "../../../../assets/stylesheets/experimentPage.css";
import HeaderExperimentPage from "./HeaderExperimentPage";

export default function ExperimentPage() {
  return (
    <div className="containerExperimentPage">
      <HeaderExperimentPage />
      <div className="list-cards">
        <Card />
      </div>
    </div>
  );
}
