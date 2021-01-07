import React from "react";

const fullpot = (props) => {
  return (
    <div>
      <h1>The Full Potential Theory in short</h1>
      <p>
        A fundamental deficiency of classical Continuous System Simulation (CSS)
        languages is the incapability to describe and handle discrete entities,
        which often leads to erroneous results and conclusions. It is vital that
        a well-defined conceptual model can be realised by different types of
        simulation (e.g. Discrete Event Simulation for micro modelling or CSS
        for macro modelling) and still produce mutually consistent (i.e.
        contradiction free) results.
      </p>
      <b>The Full Potential CSS theory, has solved this problem by:</b>
      <ol style={{"marginTop": "4px"}}>
        <li>describing discrete objects as discrete and continuous matter as continuous, </li>
        <li>preserving the sojourn time distribution of a stage, </li>
        <li>correctly implementing attributes, and </li>
        <li>including different types of uncertainties in a proper way. </li>
      </ol>
      <p>
        However, to apply Full Potential CSS, a classical CSS language have to be complemented with a number of facilities. 
      </p>
      <p>
        StochSD is a unique Full Potential CSS language where you can model discrete entities by integer numbers and continuous amounts by ‘real’ numbers, which makes the results from micro- and macro-modelling fully consistent when the basic rules, just presented, are followed. As a bonus, also combined discrete-continuous simulation can swiftly be applied within the CSS concept.
      </p>
      <p>
        The Full Potential CSS theory is presented in the paper: <a 
          href="http://www.scirp.org/JOURNAL/PaperInformation.aspx?PaperID=80104"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Full Potential of Continious System Simulation Modelling.
        </a>

      </p>
    </div>
  );
};

export default fullpot;
