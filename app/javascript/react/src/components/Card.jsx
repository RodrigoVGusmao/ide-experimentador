import React from "react";
import Modal from "./Modal";
import "../../../../assets/stylesheets/card.css";

export default function Card() {
  return (
    <div>
      <div className="card">
        {/* <Modal /> */}
        <div className="card-header">
          <p>Nome do teste</p>
          <p>Tags</p>
          <p>ativar</p>
          <p>executar</p>
          <p>mais opções</p>
        </div>

        <div className="card-content">
          <p>Location</p>
          <p>Battery</p>
          <p>skills</p>
        </div>

        <div className="card-bottom">
          <p>Runs</p>
        </div>
      </div>
    </div>
  );
}
