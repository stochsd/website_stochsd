import React from "react";
import './Software.css';
import ExternLink from './../ExternLink';

const software = () => {
  return (
    <div>
      <h1>StochSD Software</h1>
      <p>
        <b>StochSD</b> is an open-source software for stochatic and dynamic modelling and simulation. It also contains tools for statistical post-analysis from multiple simulations.
      </p>
      <p>
        <b>StochSD</b> is available in two versions: <b>StochSD Desktop</b> which you download to your computer and <b>StochSD Web</b> which you can run in the web browser. Supported web browsers are: Google Chrome and Mozilla Firefox.
      </p>
      <p>
        <ExternLink to="https://sourceforge.net/projects/stochsd/files/">StochSD Desktop</ExternLink> (download)
        <br />
        <ExternLink to="https://stochsd.sourceforge.io/software/MultiSimulationAnalyser/index.html">StochSD Web</ExternLink> (online)
      </p>
      <p>
        The open-source code for <b>StochSD</b> is available <ExternLink to="https://github.com/stochsd/stochsd">here</ExternLink>.
      </p>
      <h2>About the Open-Source License</h2>
      <p>
        Copyright &copy; 2021 StochSD.
      </p>
      <p>
        <b>StochSD</b> is based on the open-source part of Insight Maker. StochSD’s source code (including the open-source part of Insight Maker) is released under a custom license called <i>Insight Maker Public License</i>, which is based on the Affero GPL. Insight Maker’s Public License is available at: <ExternLink to="https://insightmaker.com/impl">https://insightmaker.com/impl</ExternLink>
      </p>
      <p>
        <i>Insight Maker Public License</i> thus covers all StochSD’s JavaScript, HTML and CSS code for StochSD. The original non-open source code in Insight Maker, such as ExtJS and mxGraph are completely eliminated and replaced by the open-source libraries jqPlot and jquery-ui.
      </p>
      <p>
        All the parts of the code that are from the original Insight Maker are
        copyrighted by Scott Fortmann-Roe and the files specific to StochSD are
        copyrighted by Erik Gustafsson and Magnus Gustafsson. 
      </p>
      <p>
        The full license is found in StochSD under <i>Help-&gt;Third-party Software</i>.
      </p>
      <p>
        <h3>Responsibility</h3>
        The user is fully responsible for the use of StochSD and its tools. The producer and the supplier of this code take no responsibility for the use or functioning of StochSD and its tools.
      </p>
    </div>
  );
};

export default software;
