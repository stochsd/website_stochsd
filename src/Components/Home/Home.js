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
        <b>StochSD</b> (<u>Stoch</u>astic <u>S</u>ystem <u>D</u>ynamics) is an extension of Continuous System Simulation (CSS) that not only can model and simulate continious flows between compartments, but also handle discrete transitions of entities. This also means that combined models within the CSS concept can be constructed in a straightforward way.
      </p>
      <p>
        One important aspect is that full consistency between micro models (in e.g. Discrete Event Simulation or Agent Based models) and macro models in StochSD can be obtained by following some rules. This is described in the <Link to="/full_potential_css">Full Potential CSS theory</Link>.
      </p>
      <p>
        StochSD also includes tools for optimization/parameter estimation, sensitivity analysis, and statistical analysis and presentation of results from multiple simulations of a stochastic model.
      </p>
      <p>
        StochSD is mainly intended for education and research where small and medium-sized CSS modelling and simulation is used. In addition, a detailed <Link to="/stochsd_and_statres_manuels">User's Manual and manuals for the tools</Link> are included in StochSD and can also be downloaded. Further, a number of <Link to="/example_models">instructive examples</Link> as well as <Link to="/labs">course material</Link> are provided.
      </p>
      <p>
        StochSD uses the System Dynamics approach, which means that models are easily constructed by Stocks and Flows in a click-and-draw manner.
      </p>
      <p>
        StochSD was developed by Leif, Erik and Magnus Gustafsson at Uppsala University, Sweden in cooperation with and support from the Karolinska Institute and the Agricultural University of Sweden. It is a fully open-source package that runs on Windows, macOS and Linux.
      </p>
      <p class="course"><b>MATERIAL</b> for a course in Modelling and Simulation for teaching or for self-studies is also provided for free downloading and use. It consists of nine Lectures in the form of 260 Powerpoint slides and five Laboratory Exercises. Also, instructive models are available for downloading.</p>
      <p>
        <ExternLink to="http://www.signal.uu.se/Staff/lg/lg.html">
          <b>Leif Gustafsson</b>
        </ExternLink>
        <br />
        <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
          Leif.Gunnar.Gustafsson@gmail.com
        </a>
      </p>
      <p>
        <i>Updated: 2022-01-30 <span class="subtle">(yyyy-mm-dd)</span></i>
      </p>
    </div>
  );
};

export default home;
