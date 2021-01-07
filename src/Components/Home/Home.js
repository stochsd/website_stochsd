import React from "react";
import { Link } from "react-router-dom";
import ExternLink from "./../ExternLink";

const home = (props) => {

  return (
    <div className={props.className}>
      <h1>
        StochSD Home Page 
      </h1>
      <p>
        <b>StochSD</b> (<u>Stoch</u>astic <u>S</u>ystem <u>D</u>ynamics) is an extension of Continuous System Simulation (CSS) that not only can model and simulate continious flows between compartments, but also handle discrete transitions of entities. Also combined models within the CSS concept can be constructed in a straightforward way.
      </p>
      <p>
        One imprtant aspect is that the <Link to="/full_potential_css">Full Potential Theory</Link>, which enables consistency between micro models (in e.g. Descrete Event Simulation or Agent Based models) and macro models realized by StochSD.
      </p>
      <p>
        StochSD includes tools for optimization/parameter estimation, for sensitivity analysis, and for statistical analysis and presentation of results from multiple simulations of a stochastic model.
      </p>
      <p>
        StochSD is mainly intended for eduation and research where small and medium-sized CSS modelling and simulation is used. In addition to the software a, detailed <Link to="/stochsd_and_statres_manuels">User's Manual and manuals for the tools</Link> are included in StochSD and can also be downloaded. Further, a number of <Link to="/example_models">instructive examples</Link> as well as <Link to="/labs">lab exercises</Link> are provided.
      </p>
      <p>
        StochSD is partly based on the open-source parts of <ExternLink to="https://insightmaker.com/">Insight Maker</ExternLink>. using the System Dynamics approach of Stocks and Flows where models are easily built in a click-and-draw manner.
      </p>
      <p>
        StochSD was developed by <ExternLink to="http://www.signal.uu.se/Staff/lg/lg.html">Leif</ExternLink>, Erik and Magnus Gustafsson at Uppsala University, Sweden in cooperation with and support from the Karolinska Institute and the Agricultural University of Sweden. It is a fully open-source package written in JavaScript that runs on Windows, macOS and Linux. StochSD have now been tested in a number of university courses and a large effort has been spent on pedagogic aspects, easy handling, flexibility and debugging. 
      </p>
      <p>
        <b>Leif Gustafsson</b>
        <br />
        <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
          Leif.Gunnar.Gustafsson@gmail.com
        </a>
      </p>
      <p>
        <i>Updated: 2021-01-07 (yyyy-mm-dd)</i>
      </p>
    </div>
  );
};

export default home;
