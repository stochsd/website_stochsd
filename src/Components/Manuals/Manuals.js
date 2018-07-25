import React from "react";

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
          <a href="StochSim_User's_Manual.pdf">StochSim user's manual</a> 
          {" "}- for the simulation language StochSim.
        </li>
        <li>
          <a href="StatRes.pdf">
            StatRes manual
          </a>
          {" "}- for statistical analysis of multiple runs of a stochastic model.
        </li>
        <li>
          <a href="Optim.pdf">
            Optim manual
          </a>
          {" "}- for optimisation of a deterministic model.
        </li>
        <li>
          <a href="Sensi.pdf">
            Sensi manual
          </a>
          {" "}- for sensitivity analysis.
        </li>
        <li>
          <a href="ParmVar.pdf">
            ParmVar manual
          </a>
          {" "}- for analysis of parameter variations.
        </li>
      </ul>
    </div>
  );
};

export default manuals;
