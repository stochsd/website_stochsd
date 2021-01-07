import React from "react";
import file1 from "./StochSD-Files/A1_Right_and_wrong_stoch_modelling.ssd";
import file2 from "./StochSD-Files/A2_Determ_models_hide_and distort.ssd";
import file3 from "./StochSD-Files/A3_Green's_model.ssd";
import file4 from "./StochSD-Files/A4_SIR_models.ssd";
import file5 from "./StochSD-Files/A5_MMs_queue.ssd";
import file6 from "./StochSD-Files/A6_Combined_model.ssd";
import file7 from "./StochSD-Files/A7_Lanchester.ssd";

const examples = () => {
  const ex_list = [
    {"filepath": file1, "desc": "Right and wrong stochastic modelling"},
    {"filepath": file2, "desc": "Deterministic modelling hides behaviours and may distort results"},
    {"filepath": file3, "desc": "Consequences of neglecting stage-to-compartment expansion"},
    {"filepath": file4, "desc": "Behaviours of different SIR models"},
    {"filepath": file5, "desc": "Queues and statistical devices"},
    {"filepath": file6, "desc": "Combined continuous and discrete modelling"},
    {"filepath": file7, "desc": "Lanchester's model of warfare. Combat between two forces."}
  ];


  return (
    <div>
      <h1>StochSD Example Models</h1>
      <b>StochSD</b> examples from the paper:{" "}
      <a 
        href="http://www.scirp.org/JOURNAL/PaperInformation.aspx?PaperID=80104"
        target="_blank"
        rel="noopener noreferrer"
      >
      The full potential of Continuous System Simulation modelling
      </a>
      <ul>
        {ex_list.map((ex, index) => {
          return (<li>
            <a href={ex["filepath"]} download><b>Ex-{index+1}</b></a> - {ex["desc"]}
          </li>);
        })}
      </ul>
      <p>
        To run an example file, click 'Ex-n' and download it on your computer.{" "}
        Then start StochSD and open the saved file from whithin StochSD.
      </p>
    </div>
  );
};

export default examples;
