import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../../../../assets/stylesheets/experimentPage.css";
import HeaderExperimentPage from "./HeaderExperimentPage";
import "./ToggleCard.js";

export default function ExperimentPage() {
  const [infoExp, setInfoExp] = useState({});
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    fetch("/api/experiments/")
      .then(async (res) => {
        const parse = await res.json();

        const id = parse[0].id;
        const name = parse[0].name;
        setInfoExp({ id, name });
        return id;
      })
      .then(async (id) => {
        const path = "/api/experiments/" + id + "/trial";
        fetch(path).then(async (trials) => {
          const parse = await trials.json();

          setTrials(parse);
        });
      });
  }, []);

  return (
    <div className="container">
      <div className="menuExperimentPage">
        {infoExp.name}
        <img
          src="/card-icons/play-unactivated.svg"
          alt="Executar"
          className="play-button-xp-page"
        />
      </div>

      <div className="containerExperimentPage">
        <HeaderExperimentPage name={infoExp.name} />
        <div className="list-cards">
          {trials.map((item) => {
            return (
              <Card
                name={item.name}
                disabled={item.disabled}
                deleted={item.deleted}
                runs={item.runs}
                trialId={item.id}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
