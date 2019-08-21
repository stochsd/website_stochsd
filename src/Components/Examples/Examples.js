import React from "react";
import file1 from "./StochSD-Files/A1_Right_and_wrong_stoch_modelling.ssd";
import file2 from "./StochSD-Files/A2_Determ_models_hide_and distort.ssd";
import file3 from "./StochSD-Files/A3_Green's_model.ssd";
import file4 from "./StochSD-Files/A4_SIR_models.ssd";
import file5 from "./StochSD-Files/A5_MMs_queue.ssd";
import file6 from "./StochSD-Files/A6_Combined_model.ssd";

const examples = () => {
  return (
    <div>
      <h1>Example Models</h1>
      <b>StochSD</b> examples from the paper:{" "}
      <a 
        href="http://www.scirp.org/JOURNAL/PaperInformation.aspx?PaperID=80104"
        target="_blank"
        rel="noopener noreferrer"
      >
      The full potential of Continuous System Simulation modelling
      </a>
      <ul>
        <li>
          <a
            href={file1}
            download
          >
            <b>Ex-1</b>
          </a>{" "}
          (Right and wrong stochastic modelling)
        </li>
        <li>
          <a
            href={file2}
            download
          >
            <b>Ex-2</b>
          </a>{" "}
          (Deterministic modelling hides behaviours and may distort results)
        </li>
        <li>
          <a
            href={file3}
            download
          >
            <b>Ex-3</b>
          </a>{" "}
          (Consequences of neglecting stage-to-compartment expansion)
        </li>
        <li>
          <a
            href={file4}
            download
          >
            <b>Ex-4</b>
          </a>{" "}
          (Behaviours of different SIR models)
        </li>
        <li>
          <a
            href={file5}
            download
          >
            <b>Ex-5</b>
          </a>{" "}
          (Queues and statistical devices)
        </li>
        <li>
          <a
            href={file6}
            download
          >
            <b>Ex-6</b>
          </a>{" "}
          (Combined continuous and discrete modelling)
        </li>
      </ul>
      <p>
        To run an example file, click 'Ex-n' and download it on your computer.{" "}
        Then start StochSD and open the saved file from whithin StochSD.
      </p>
    </div>
  );
};

export default examples;
