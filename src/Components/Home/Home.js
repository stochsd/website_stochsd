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
        <b>StochSD</b> (<u>Stoch</u>astic <u>S</u>ystem <u>D</u>ynamics) is an <ExternLink to="https://en.wikipedia.org/wiki/Open_source">open-source</ExternLink> <u>C</u>ontinuous <u>S</u>ystem <u>S</u>imulation (CSS) language. It is based on the <ExternLink to="https://en.wikipedia.org/wiki/System_dynamics">System Dynamics</ExternLink> approach where a model is built by connecting Stocks (compartments), Flows and a few other primitives in a click-and-draw manner. In the design of StochSD, pedagogic aspects such as ease of use and understanding have been prioritised. StochSD is mainly intended for education and research where small and medium-sized CSS modelling and simulation is used. A detailed <ExternLink to="https://stochsd.sourceforge.io/manuals/StochSD_User_Manual.pdf">User&#39;s Manual</ExternLink> is included. StochSD runs on Windows, macOS and Linux.
      </p>
      <p>
        StochSD is an extension of Continuous System Simulation, which not only can model and simulate continuous flows between compartments, but also handle discrete transitions of entities. This means that a queuing system or a combined continuous and discrete model can be constructed in a straightforward way. One important aspect of this is that full <ExternLink to="https://en.wikipedia.org/wiki/Consistency">consistency</ExternLink> between a micro model (in e.g. Discrete Event Simulation or Agent Based
Simulation) and a macro model in StochSD can be obtained by following
some rules. This is described in the <Link to="/full_potential_css">Full Potential CSS theory</Link>.
      </p>
      <p>
      Tools for optimization/parameter estimation, sensitivity analysis, and statistical analysis and presentation of results from multiple simulations of a stochastic model are included in StochSD.
      </p>
      <p>
      StochSD was developed by Leif, Erik and Magnus Gustafsson at Uppsala University, Sweden with support from the Karolinska Institute and the Agricultural University of Sweden. It is also presented in the paper: “<a style={{whiteSpace: "break-spaces"}} href="https://www.scirp.org/journal/paperinformation?paperid=116904">StochSD: A Full Potential CSS Language for Dynamic and Stochastic Modelling,
Simulation and Statistical Analysis</a>” in Open Journal of Modelling and Simulation,
2022. 
      </p>
      <p>
        <b>Course Material</b> for teaching or for self-studies in Modelling and Simulation is also provided for free downloading and use. It consists of nine Lectures in the form of 260 Powerpoint slides and five Laboratory Exercises. Also, instructive models are available for downloading. 
      </p>
      <p>
        <b>Leif Gustafsson</b>
        <br />
        <a href="Mailto:Leif.Gunnar.Gustafsson@gmail.com">
          Leif.Gunnar.Gustafsson@gmail.com
        </a>
      </p>
      <p>
        <i>Updated: 2024-03-03 <span className="subtle">(yyyy-mm-dd)</span></i>
      </p>
    </div>
  );
};

export default home;
