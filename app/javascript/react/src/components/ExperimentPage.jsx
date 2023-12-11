import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../../../../assets/stylesheets/experimentPage.css";
import HeaderExperimentPage from "./HeaderExperimentPage";
import "./ToggleCard.js";

export default function ExperimentPage() {
  const [experimentsInfos, setExperimentsInfos] = useState([]);
  const [trials, setTrials] = useState([]);

  const [experimentName, setExperimentName] = useState();

  useEffect(() => {
    fetch("/api/experiments/").then(async (res) => {
      const listOfExperiments = await res.json();

      setExperimentsInfos(listOfExperiments);
    });
  }, []);

  function handleOnClick(id, name) {
    const path = "/api/experiments/" + id + "/trial";
    fetch(path).then(async (trials) => {
      const listOfTrials = await trials.json();
      setTrials(listOfTrials);
    });

    setExperimentName(name);
  }

  return (
    <div className="container">
      <div className="containerMenuExperiments">
        {experimentsInfos.map((experiment) => {
          return (
            <ExperimentItemMenu
              experiment={experiment}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>

      <div className="containerExperimentPage">
        <HeaderExperimentPage name={experimentName} />
        <div className="list-cards">
          {trials.map((trial) => {
            return (
              <Card
                name={trial.name}
                disabled={trial.disabled}
                deleted={trial.deleted}
                runs={trial.runs}
                trialId={trial.id}
                key={trial.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
