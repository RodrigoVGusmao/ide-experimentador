import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "../../../../assets/stylesheets/card.css";
import "./ToggleCard.js";

export default function Card({ name, disabled, deleted, runs, trialId }) {
  const [log, setLog] = useState({});

  useEffect(() => {
    const path = "/api/trial/" + trialId;
    fetch(path).then(async (res) => {
      const parse = await res.json();
      const logJSON = JSON.parse(parse.log);

      const x = logJSON.x;
      const y = logJSON.y;
      const z = logJSON.z;
      const battery = logJSON.battery;
      setLog({ x, y, z, battery });
    });
  }, []);

  return (
    <div className={disabled ? "card-disactivated" : "card"}>
      {/* <Modal /> */}
      <div className="card-header">
        <div className="test-title">{name}</div>

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
            <img
              src="/card-icons/toggle-right.svg"
              alt="Ativar"
              className="toggle-switch"
            />
          </div>

          <div>
            <img
              src="/card-icons/play-unactivated.svg"
              alt="Executar"
              className="play-button"
            />
          </div>

          <div>
            <img
              src="/card-icons/more-horizontal.svg"
              alt="Mais"
              className="drop-down"
            />
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="skills">
          <img src="/card-icons/map-pin.svg" />
          <p className="skill-text">
            X:{log.x} Y:{log.y} Z:{log.z}
          </p>
        </div>

        <div className="skills">
          <img src="/card-icons/battery-charging.svg" />
          <p className="skill-text">{log.battery}</p>
        </div>
      </div>

      <div className="card-bottom">
        <p className="runs">Runs: {runs}</p>
        <div>
          <img src="/card-icons/ellipse-green.svg" />
        </div>
      </div>
    </div>
  );
}
