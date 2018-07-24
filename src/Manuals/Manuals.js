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
          <a href="StochSim_User's_Manual.pdf">StochSim manual</a> 
          {" "}manual for the simulation language StochSim
        </li>
        <li>
          <a href="StatRes.pdf">
            StatRes manual
          </a>{" "}
          manual for the statistical tool StatRes
        </li>
        <li>
          <a href="Optim.pdf">
            Optim manual
          </a>
        </li>
        <li>
          <a href="Sensi.pdf">
            Sensi manual
          </a>
        </li>
        <li>
          <a href="ParmVar.pdf">
            ParmVar manual
          </a>
        </li>
      </ul>
    </div>
  );
};

export default manuals;
