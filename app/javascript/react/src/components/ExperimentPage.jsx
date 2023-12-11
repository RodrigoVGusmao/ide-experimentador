import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../../../../assets/stylesheets/experimentPage.css";
import HeaderExperimentPage from "./HeaderExperimentPage";
import ExperimentItemMenu from "./ExperimentItemMenu";
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

  console.log("experiments", experimentsInfos);
  console.log("trials", trials);

  return (
    <div className="container">
      <div className="containerMenuExperiments">
        {experimentsInfos.map((experiment) => {
          return (
            <ExperimentItemMenu
              experiment={experiment}
              handleOnClick={handleOnClick}
              key={Math.random()}
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
                key={Math.random()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
