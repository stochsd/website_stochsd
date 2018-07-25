import React from "react";
import file1 from "./StochSim-Files/A1_Right_and_wrong_stoch_modelling.insightmaker";
import file2 from "./StochSim-Files/A2_Determ_models_hide_and distort.insightmaker";
import file3 from "./StochSim-Files/A3_Green's_model.insightmaker";
import file4 from "./StochSim-Files/A4_SIR_models.insightmaker";
import file5 from "./StochSim-Files/A5_MMs_queue.insightmaker";
import file6 from "./StochSim-Files/A6_Combined_model.insightmaker";

const examples = () => {
  return (
    <div>
      <h1>Example Models</h1>
      (<b>StochSim</b> examples from the paper "The full potential of Continuous
      System Simulation modelling")
      <ul>
        <li>
          <a
            href={file1}
            download
          >
            StochSim Ex_1
          </a>{" "}
          (Right and wrong stochastic modelling)
        </li>
        <li>
          <a
            href={file2}
            download
          >
            StochSim Ex_2
          </a>{" "}
          (Deterministic modelling hides behaviours and may distort results)
        </li>
        <li>
          <a
            href={file3}
            download
          >
            StochSim Ex_3
          </a>{" "}
          (Consequences of neglecting stage-to-compartment expansion)
        </li>
        <li>
          <a
            href={file4}
            download
          >
            StochSim Ex_4
          </a>{" "}
          (Behaviours of different SIR models)
        </li>
        <li>
          <a
            href={file5}
            download
          >
            StochSim Ex_5
          </a>{" "}
          (Queues and statistical devices)
        </li>
        <li>
          <a
            href={file6}
            download
          >
            StochSim Ex_6
          </a>{" "}
          (Combined continuous and discrete modelling)
        </li>
      </ul>
      <p>
        To run an example file, click 'StochSim Ex_n' and download it to a saved
        file on your computer.
        <br />
        Then start StochSim and open the saved file from whithin StochSim.
      </p>
      <br />
      The six examples can also be studied with <b>Insight Maker</b>. However,
      then no statistical post-analysis is possible.<br />
      <ul>
        <li>
          <a href="https://insightmaker.com/insight/73938/Full-Pot-Ex-A1">
            Insight Maker Ex_1
          </a>{" "}
          (Right and wrong stochastic modelling)
        </li>
        <li>
          <a href="https://insightmaker.com/insight/50579/Full-Pot-Ex-A2">
            Insight Maker Ex_2
          </a>{" "}
          (Deterministic modelling hides behaviours and may distort results)
        </li>
        <li>
          <a href="https://insightmaker.com/insight/73942/Full-Pot-Ex-A3">
            Insight Maker Ex_3
          </a>{" "}
          (Consequences of neglecting stage-to-compartment expansion)
        </li>
        <li>
          <a href="https://insightmaker.com/insight/50582/Full-Pot-Ex-A4">
            Insight Maker Ex_4
          </a>{" "}
          (Behaviours of different SIR models)
        </li>
        <li>
          <a href="https://insightmaker.com/insight/73951/Full-Pot-Ex-A5">
            Insight Maker Ex_5
          </a>{" "}
          (Queues and statistical devices)
        </li>
        <li>
          <a href="https://insightmaker.com/insight/50292/Full-Pot-Ex-A6">
            Insight Maker Ex_6
          </a>{" "}
          (Combined continuous and discrete modelling)
        </li>
      </ul>
      To edit these files you have to get an Insight Maker account at:{" "}
      <a href="http://insightmaker.com">
        http://insightmaker.com
      </a>{" "}
      and 'clone' the models.<br />
      The Insight Maker Manual is found at:{" "}
      <a href="http://insightmaker.com/manual">
        http://insightmaker.com/manual
      </a>.
    </div>
  );
};

export default examples;
