import React from "react";
import ExperimentPage from "./ExperimentPage";
import { DropdownCardProvider } from "../dropdownContext";

function Home() {
  return (
    <DropdownCardProvider>
      <ExperimentPage />
    </DropdownCardProvider>
  );
}

export default Home;
