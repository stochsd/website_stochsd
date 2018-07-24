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
        <a href="OJMSi_20160427_17425486.pdf">
          <i>A guide to population modelling for simulation</i>
        </a>.
      </p>
      However, by: <br />
      &nbsp; 1) modelling discrete objects as discrete<br />
      &nbsp; 2) handling attributes and sojourn times correctly<br />
      &nbsp; 3) including various types of stochasticities<br />
      a CSS model can be fully consistent with a DES model.<br />
      <p>
        Further, in all types of <b>stochastic simulation</b> you need to
        perform <i>multiple simulations</i> of the model followed by a{" "}
        <i>statistical analysis</i>. Therefore, a tool for this is required in
        stochastic CSS modelling. Such a tool named <b>StatRes</b> is here
        presented.
      </p>
      <h2>
        Paper, Software with documentation, and Examples of{" "}
        <b>Stochastic CSS</b>
      </h2>
      In order to teach stochastic CSS modelling and simulation the following
      features are provided and can be reached from <b>'Resources'</b>:<br />
      <br />
      <b>Stochastic CSS:</b> Reference to the paper:{" "}
      <a href="Full_Pot_DUMMY.pdf">
        <i>The full potential of Continuous System Simulation modelling</i>
      </a>
      <br />
      <br />
      <b>StochSim:</b> A simple language for stochastic CSS simulation
      (including StatRes)<br />
      <b>StatRes:</b> A StochSim tool for statistical analysis of multiple
      simulations<br />
      <br />
      <b>Example Models</b> (presented in the paper): Six example models in
      StochRes illustrating the need for stochactic CSS <br />
      <br />
      <a href="http://www.signal.uu.se/Research/simulation.html">
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
      <i>Updated: 2018-07-24</i>
    </div>
  );
};

export default home;
