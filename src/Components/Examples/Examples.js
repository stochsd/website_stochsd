import React from "react";
import ExternLink from "../ExternLink";
import file1 from "./StochSD-Files/Ex-1_Right_and_wrong_stoch_modelling.ssd";
import file2 from "./StochSD-Files/Ex-2_Determ_models_hide_and distort.ssd";
import file3 from "./StochSD-Files/Ex-3_Green's_model.ssd";
import file4 from "./StochSD-Files/Ex-4_SIR_models.ssd";
import file5 from "./StochSD-Files/Ex-5_MMs_queue.ssd";
import file6 from "./StochSD-Files/Ex-6_Combined_model.ssd";
import file7 from "./StochSD-Files/Ex-7_Lanchester.ssd";

const examples = () => {
  const ex_list = [
    {"filepath": file1, "desc": "Right and wrong stochastic modelling."},
    {"filepath": file2, "desc": "Deterministic modelling hides behaviours and may distort results."},
    {"filepath": file3, "desc": "Consequences of neglecting stage-to-compartment expansion."},
    {"filepath": file4, "desc": "Behaviours of different SIR models."},
    {"filepath": file5, "desc": "Queues and statistical devices."},
    {"filepath": file6, "desc": "Combined continuous and discrete modelling."},
    {"filepath": file7, "desc": "Lanchester's model of warfare. Combat between two forces."}
  ];


  return (
    <div>
      <h1>StochSD Example Models</h1>
      <p><strong>Instructive models</strong> that display important aspects - (download as .ssd files)</p>
      <ul>
        {ex_list.map((ex, index) => {
          return (<li>
            <ExternLink to={ex["filepath"]} download><b>Ex-{index+1}</b></ExternLink> - {ex["desc"]}
          </li>);
        })}
      </ul>
      <p>
        To run an example file, download it on your computer. Then start StochSD and open the saved file from within StochSD.
      </p>
    </div>
  );
};

export default examples;
