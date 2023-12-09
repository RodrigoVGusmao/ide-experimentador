import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "../../../../assets/stylesheets/card.css";

export default function Card({ name, disabled, deleted, runs, trialId }) {
  const [log, setLog] = useState({});

  useEffect(() => {
    const path = "/api/trial/" + trialId;
    fetch(path).then(async (res) => {
      const parse = await res.json();
      const logJSON = JSON.parse(parse.log);

      console.log("card", parse);
      console.log("log", logJSON);
      const x = logJSON.x;
      const y = logJSON.y;
      const z = logJSON.z;
      const battery = logJSON.battery;
      setLog({ x, y, z, battery });
    });
  }, []);

  return (
    <div className="card">
      {/* <Modal /> */}
      <div className="card-header">
        <div className="test-title">
          <text>{name}</text>
        </div>

        <div className="tags">
          <div className="tag">
            <img src="/card-icons/tag1.svg" alt="Tag 1" />
          </div>

          <div className="tag">
            <img src="/card-icons/tag2.svg" alt="Tag2" />
          </div>
        </div>

        <div className="options">
          <div>
            <img src="/card-icons/toggle-activated.svg" alt="Ativar" />
          </div>

          <div>
            <img src="/card-icons/play.svg" alt="Executar" />
          </div>

          <div>
            <img src="/card-icons/more-horizontal.svg" alt="Mais" />
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="skills">
          <img src="/card-icons/map-pin.svg" />
          <text className="skill-text">X:{log.x}</text>
          <text className="skill-text">Y:{log.y}</text>
          <text className="skill-text">Z:{log.z}</text>
        </div>

        <div className="skills">
          <img src="/card-icons/battery-charging.svg" />
          <text className="skill-text">{log.battery}</text>
        </div>
      </div>

      <div className="card-bottom">
        <text className="runs">Runs: {runs}</text>
        <div>
          <img src="/card-icons/ellipse-green.svg" />
        </div>
      </div>
    </div>
  );
}
