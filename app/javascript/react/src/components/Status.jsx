import React from "react";
import { useExperiments } from "../experimentsContext";

export default function Status({ status, running, activated }) {
  const { runningTrial, setRunningTrial } = useExperiments();

  console.log("rT", runningTrial, running);
  function showStatus() {
    if ((runningTrial && activated) || running || status == "running") {
      return "/card-icons/loader.svg";
    } else if (!(runningTrial && activated) || !running) {
      if (status == "toRun") {
        return "/card-icons/ellipse-green.svg";
      } else {
        return "/card-icons/ellipse-orange.svg";
      }
    } else {
      console.log("ueopa");
    }
  }

  return (
    <div>
      <img src={showStatus()} alt="icone-status" />
    </div>
  );
}
