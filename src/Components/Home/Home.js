import React from "react";

const home = (props) => {
  return (
    <div className={props.className}>
      <h1>
        Purpose of <b>Stochastic CSS</b>
      </h1>
      <p>
        <b>Continuous System Simulation (CSS)</b> has long been an inferior and
        inconsistent type of simulation compared to various forms of Discrete
        Event Simulation (DES). See the paper:{" "}
        <a 
          href="http://www.scirp.org/journal/PaperInformation.aspx?paperID=66005" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>A guide to population modelling for simulation</i>
        </a>.
      </p>
      However, a CSS model can be fully consistent with a DES model by: <br />
      &nbsp; 1) modelling discrete objects as discrete,<br />
      &nbsp; 2) handling attributes and sojourn times correctly,<br />
      &nbsp; 3) including various types of stochasticities.<br />
      <br />
      <p>
        Further, in all types of <b>stochastic simulation</b> you need to
        perform <i>multiple simulations</i> of the model followed by a{" "}
        <i>statistical analysis</i>. Therefore, a tool to perform this is required in
        stochastic CSS modelling.
      </p>
      <br/>
      <h2>
        <b>StochSD</b> Software with documentation and Examples
      </h2>
      In order to teach <i>stochastic</i> CSS modelling and simulation the open-source software {" "}
      <b>StochSD</b> is provided <a href="/stochsd_software">here</a>.
      <br />
      <br />
      <b>StochSD:</b> A CSS language for stochastic simulation
      {" "}(including StatRes, which is a tool for statistical analysis of multiple
      simulations).<br />
      <br />
      <b>Example Models</b> (presented in the paper, below): Six example models in
      StochRes illustrating the need for stochactic CSS.
      <br />
      <br />
      <b>Stochastic CSS:</b> Reference to the paper:{" "}
      <a 
        href="http://www.scirp.org/JOURNAL/PaperInformation.aspx?PaperID=80104"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>The full potential of Continuous System Simulation modelling</i>
      </a>
      <br/>
      <br/>
      <a 
        href="http://www.signal.uu.se/Research/simulation.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Research on Simulation, Uppsala University, Sweden
      </a>
      <br />
      <br />
      <b>Leif Gustafsson</b>
      <br />
      <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
        Leif.Gunnar.Gustafsson@gmail.com
      </a>
      <br />
      <br />
      <i>Updated: 2018-07-25</i>
    </div>
  );
};

export default home;
