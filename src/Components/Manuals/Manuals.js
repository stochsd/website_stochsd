import React from "react";
// import StochSDUserManual from "./pdfs/StochSD_User_Manual.pdf";
// import StatResManual from "./pdfs/StochSD_StatRes.pdf";
// import OptimManual from "./pdfs/StochSD_Optim.pdf";
// import SensiManual from "./pdfs/StochSD_Sensi.pdf";
// import ParmVarManual from "./pdfs/StochSD_ParmVar.pdf";

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
      <a target="_blank" href={"https://stochsd.sourceforge.io/manuals/StochSD_User_Manual.pdf"}><b>StochSD User's Manual</b></a> 
        {" "}- for the simulation language StochSD.
      <br/>
      <br/>
      <b>Tools</b>
      <ul style={listStyle}>
        <li>
          <a target="_blank" href={"https://stochsd.sourceforge.io/manuals/StochSD_StatRes.pdf"}>
            StatRes manual
          </a>
          {" "}- for multiple runs of a stochastic model, statistical analysis and result presentation.
        </li>
        <li>
          <a target="_blank" href={"https://stochsd.sourceforge.io/manuals/StochSD_ParmVar.pdf"}>
            ParmVar manual
          </a>
          {" "}- for parameters estimation with a stochastic model.
        </li>
        <li>
          <a target="_blank" href={"https://stochsd.sourceforge.io/manuals/StochSD_Optim.pdf"}>
            Optim manual
          </a>
          {" "}- for optimisation and for model fitting of a deterministic model.
        </li>
        <li>
          <a target="_blank" href={"https://stochsd.sourceforge.io/manuals/StochSD_Sensi.pdf"}>
            Sensi manual
          </a>
          {" "}- for sensitivity analysis.
        </li>
      </ul>
    </div>
  );
};

export default manuals;
