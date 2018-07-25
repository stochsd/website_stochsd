import React from "react";
import StochSimUserManual from "./pdfs/StochSim_User_Manual.pdf";
import StatResManual from "./pdfs/StochSim_StatRes.pdf";
import OptimManual from "./pdfs/StochSim_Optim.pdf";
import SensiManual from "./pdfs/StochSim_Sensi.pdf";
import ParmVarManual from "./pdfs/StochSim_ParmVar.pdf";

const manuals = () => {
  const listStyle = {
    paddingLeft: "20px",
    marginTop: "0px",
    marginBottom: "0px",
    ":li": {
      color: "red"
    }
  };

  return (
    <div>
      <h1>StochSim Manuals:</h1>
      <ul style={listStyle}>
        <li>
          <a href={StochSimUserManual}>StochSim user's manual</a> 
          {" "}- for the simulation language StochSim.
        </li>
        <li>
          <a href={StatResManual}>
            StatRes manual
          </a>
          {" "}- for statistical analysis of multiple runs of a stochastic model.
        </li>
        <li>
          <a href={OptimManual}>
            Optim manual
          </a>
          {" "}- for optimisation of a deterministic model.
        </li>
        <li>
          <a href={SensiManual}>
            Sensi manual
          </a>
          {" "}- for sensitivity analysis.
        </li>
        <li>
          <a href={ParmVarManual}>
            ParmVar manual
          </a>
          {" "}- for analysis of parameter variations.
        </li>
      </ul>
    </div>
  );
};

export default manuals;
