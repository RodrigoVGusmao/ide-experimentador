import React from "react";
import Modal from "./Modal";
import "../../../../assets/stylesheets/card.css";

export default function Card() {
  return (
    <div className="fundo">
      <div className="card">
        {/* <Modal /> */}
        <div className="card-header">
          <div className="test-title">
            <text>Teste 1</text>
          </div>

          <div className="tags">
            <div className="tag">
              <img src="card-icons/tag1.svg" alt="Tag 1" />
            </div>

            <div className="tag">
              <img src="card-icons/tag2.svg" alt="Tag2" />
            </div>
          </div>

          <div className="options">
            <div>
              <img src="card-icons/toggle.svg" alt="Ativar" />
            </div>

            <div>
              <img src="card-icons/play.svg" alt="Executar" />
            </div>

            <div>
              <img src="card-icons/more-horizontal.svg" alt="Mais" />
            </div>
          </div>
        </div>

        <div className="card-content">
          <div className="skills">
            <img src="card-icons/map-pin.svg" />
            <text className="skill-text">X:0</text>
            <text className="skill-text">Y:0</text>
            <text className="skill-text">Z:0</text>
          </div>

          <div className="skills">
            <img src="card-icons/battery-charging.svg" />
            <text className="skill-text">0%</text>
          </div>
        </div>

        <div className="card-bottom">
          <text className="runs">Runs: 0</text>
          <div>
            <img src="card-icons/ellipse-green.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
