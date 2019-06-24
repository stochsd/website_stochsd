import React from "react";
import StochSDUserManual from "./pdfs/StochSD_User_Manual.pdf";
import StatResManual from "./pdfs/StochSD_StatRes.pdf";
import OptimManual from "./pdfs/StochSD_Optim.pdf";
import SensiManual from "./pdfs/StochSD_Sensi.pdf";
import ParmVarManual from "./pdfs/StochSD_ParmVar.pdf";

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
      <h1>StochSD Manuals:</h1>
      <ul style={listStyle}>
        <li>
          <a href={StochSDUserManual}>StochSD user's manual</a> 
          {" "}- for the simulation language StochSD.
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
