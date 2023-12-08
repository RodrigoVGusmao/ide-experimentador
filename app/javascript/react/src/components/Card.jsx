import React from "react";
import Modal from "./Modal";
import "../../../../assets/stylesheets/card.css";
import "./ToggleCard.js";

export default function Card() {
  return (
    <div className="card">
      {/* <Modal /> */}
      <div className="card-header">
        <div className="test-title">Teste 1</div>

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
          <p className="skill-text">X:0 Y:0 Z:0</p>
        </div>

        <div className="skills">
          <img src="/card-icons/battery-charging.svg" />
          <p className="skill-text">0%</p>
        </div>
      </div>

      <div className="card-bottom">
        <p className="runs">Runs: 0</p>
        <div>
          <img src="/card-icons/ellipse-green.svg" />
        </div>
      </div>
    </div>
  );
}
