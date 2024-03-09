import React from "react";
import ExternLink from "../ExternLink";
// import StochSDUserManual from "./pdfs/StochSD_User_Manual.pdf";
// import StatResManual from "./pdfs/StochSD_StatRes.pdf";
// import OptimManual from "./pdfs/StochSD_Optim.pdf";
// import SensiManual from "./pdfs/StochSD_Sensi.pdf";
// import ParmVarManual from "./pdfs/StochSD_ParmVar.pdf";

const manuals = () => {
  const main_man = {"path": "https://stochsd.sourceforge.io/manuals/StochSD_User_Manual.pdf", "name": "StochSD User's Manual and Tutorial", "desc": "for the simulation language StochSD."};
  const manuals_list = [
    {
      "path": "https://stochsd.sourceforge.io/manuals/StochSD_Optim.pdf", 
      "name": "Optim manual", 
      "desc": "for optimisation and for model fitting of a deterministic model."
    },
    {
      "path": "https://stochsd.sourceforge.io/manuals/StochSD_Sensi.pdf", 
      "name": "Sensi manual", 
      "desc": "for sensitivity analysis."
    },
    {
      "path": "https://stochsd.sourceforge.io/manuals/StochSD_StatRes.pdf", 
      "name": "StatRes manual", 
      "desc": "for multiple runs of a stochastic model, statistical analysis and result presentation."
    },
    {
      "path": "https://stochsd.sourceforge.io/manuals/StochSD_ParmVar.pdf", 
      "name": "ParmVar manual", 
      "desc": "for studying the variations of parameter estimates."
    },
  ];

  const manual_to_link = (man_obj) => {
    return (<span><ExternLink to={man_obj["path"]}><b>{man_obj["name"]}</b></ExternLink> &#8212; {man_obj["desc"]}</span>);
  }


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
      <h1>StochSD Manuals <span style={{fontSize: "1.2rem", fontWeight: "normal"}}>(download as .pdf)</span></h1>
      <ul style={listStyle}><li>{manual_to_link(main_man)}</li></ul>
      <br/>
      <br/>
      <p><b>StochSD Tools</b></p>
      <ul style={listStyle}>
        {manuals_list.map(man => {
          return (<li>{manual_to_link(man)}</li>);
        })}
      </ul>
    </div>
  );
};

export default manuals;
