import React from "react";

const home = (props) => {
  return (
    <div className={props.className}>
      <h1>
        Purpose of Stochastic Simulation - StochSD 
      </h1>
      <p>
        Two main branches of simulation are <b>Continuous System Simulation (CSS)</b> and <b>Discrete Event Simulation (DES)</b>.<br />
        &nbsp; &nbsp; &nbsp;<b>CSS</b> is a <i>macro approach</i> where many items are lumped together in a structure of <b>compartments</b> connected by <b>flows</b>, and where the compartments represent different stages of our interest. During the simulation, items are dynamically transferred  between the compartments. Traditionally, a CSS model was based on dif. equations, but with the <b>System Dynamics (SD)</b> philosophy, the model building could be directly performed by placing and connecting compartments and flows into a graphical structure.<br />
        &nbsp; &nbsp; &nbsp;<b>DES</b>, on the other hand, is a <i>micro approach</i> where each item is individually described in dynamic and stochastic terms.
      </p>
      <p>
        CSS has long been an inferior and inconsistent type of simulation compared to DES. See the paper:{" "}
        <a 
          href="http://www.scirp.org/journal/PaperInformation.aspx?paperID=66005" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>A guide to population modelling for simulation</i>
        </a>.
      However, a CSS model can be fully consistent with a DES model by: <br />
      &nbsp; 1) modelling discrete objects as discrete,<br />
      &nbsp; 2) handling attributes and sojourn times correctly,<br />
      &nbsp; 3) including various types of stochasticities.<br />
      See the paper:{" "}
      <a 
          href="http://www.scirp.org/JOURNAL/PaperInformation.aspx?PaperID=80104" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>The full potential of Continuous System Simulation modelling</i>
        </a>.
      </p>
      <p>
        The <b>purpose</b> of <b>StochSD</b> (<u>Stoch</u>astic <u>S</u>ystem <u>D</u>ynamics) is to provide an open source CSS/SD language that incorporates the means to build stochastic and dynamic models as well as necessary tools for multiple simulations followed by statistical analysis and result presentation. 
      </p>
      <h2>
        StochSD Software with Documentation and Examples
      </h2>
      <p>
        In order to do <i>stochastic</i> CSS/SD modelling and simulation the open-source software <b>StochSD</b> is provided <a href="/#stochsd_software">here</a>.
      </p>
      <p>
        <b>Example Models</b> (presented in the paper ‘The full potential …’, referred to above): <br />
        Six models in StochSD illustrating the need for correctly implemented stochactics in CSS.
      </p>
      <p>
        See also: <a 
          href="http://www.signal.uu.se/Research/simulation.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Research on Simulation, Uppsala University, Sweden
        </a>
      </p>
      <p>
        <b>Leif Gustafsson</b>
        <br />
        <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
          Leif.Gunnar.Gustafsson@gmail.com
        </a>
      </p>
      <p>
        <i>Updated: 2021-01-05</i>
      </p>
    </div>
  );
};

export default home;
