import React from "react";

const home = (props) => {

  let redStyle = {
    "color": "red"
  }

  return (
    <div className={props.className}>
      <h1>
        StochSD Home Page 
      </h1>
      <p>
        <b>StochSD</b> (<u>Stoch</u>astic <u>S</u>ystem <u>D</u>ynamics) is an extension of Continuous System Simulation (CSS) that not only can model and simulate continious flows between compartments, but also handle discrete transitions of entities. Also combined models within the CSS concept can be constructed in a straightforward way.
      </p>
      <p>
        One imprtant aspect is that the <span style={redStyle}>Full Potential Theory \Link Here\</span>, which enables consistency between micro models (in e.g. Descrete Event Simulation or Agent Based models) and macro models realized by StochSD.
      </p>
      <p>
        StochSD includes tools for optimization/parameter estimation, for sensitivity analysis, and for statistical analysis and presentation of results from multiple simulations of a stochastic model.
      </p>
      <p>
        StochSD is mainly intended for eduation and research where small and medium-sized CSS modelling and simulation is used. In addition to the software a, detailed <span style={redStyle}>User's Manual and Tutorial</span> and <span style={redStyle}>manuals for the tools </span> are included in StochSD and can also be downloaded. Further, a number of <span style={redStyle}>instructive examples</span> as well as <span style={redStyle}>5 lab exercises</span> are provided at this home page.
      </p>
      <p>
        StochSD is partly based on the open-source parts of <span style={redStyle}>Insight Maker</span> using the System Dynamics approach of Stocks and Flows where models are easily built in a click-and-draw manner.
      </p>
      <p>
        StochSD was developed by <span>Leif</span>, Erik and Magnus Gustafsson at Uppsala University, Sweden in cooperation with and support from the Karolinska Institute and the Agricultural University of Sweden. It is a fully open-source package written in JavaScript that runs on Windows, macOS and Linux. StochSD have now been tested in a number of university courses and a large effort has been spent on pedagogic aspects, easy handling, flexibility and debugging. 
      </p>
      <p>
        <b>Leif Gustafsson</b>
        <br />
        <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
          Leif.Gunnar.Gustafsson@gmail.com
        </a>
      </p>
      <p>
        <i>Updated: 2021-01-07</i>
      </p>


      <div style={{"height": "2px", "width": "100%", "backgroundColor": "black", "margin": "30px 0px"}}></div>



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
