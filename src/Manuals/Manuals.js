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
          <a href="StochSim_User's_Manual.pdf" target="_blank">StochSim manual</a> 
          {" "}manual for the simulation language StochSim
        </li>
        <li>
          <a href="StatRes.pdf" target="_blank">
            StatRes manual
          </a>{" "}
          manual for the statistical tool StatRes
        </li>
        <li>
          <a href="Optim.pdf" target="_blank">
            Optim manual
          </a>
        </li>
        <li>
          <a href="Sensi.pdf" target="_blank">
            Sensi manual
          </a>
        </li>
        <li>
          <a href="ParmVar.pdf" target="_blank">
            ParmVar manual
          </a>
        </li>
      </ul>
    </div>
  );
};

export default manuals;
