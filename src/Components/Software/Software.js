import React from "react";
import './Software.css';

const software = () => {
  return (
    <div>
      <h1>StochSD Software</h1>
      <p>
        <b>StochSD</b> is a software, primarilly developed to
        introduce statistical post-analysis from multiple simulations with the
        included tool <b>StatRes</b>. (However, the <b>StatRes</b> tool is a 
        {" "}software that may be reused together with other CSS
        packages. For this purpose we have included the source code.)
        <br />
        <br />
        <b>StochSD</b> (including <b>StatRes</b>) is available in two versions:{" "}
        <b>StochSD Desktop</b> which you download to your computer and{" "}
        <b>StochSD Web</b> which you can run in the web browser 
        {" "}(Supported web browsers are: Mozilla Firefox and Google Chrome).
        <br />
        <br />
        <a
          href="https://sourceforge.net/projects/stochsd/files/"
          target="_blank"
          rel="noopener noreferrer"
        >
          StochSD Desktop
        </a>{" "}
        (download)
        <br />
        <a
          href="https://stochsd.sourceforge.io/software/MultiSimulationAnalyser/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          StochSD Web
        </a>{" "}
        (online)
        <br />
        <br />
        The open-source code for <b>StochSD</b> (including{" "}
        StatRes and three other tools) is available{" "}
        <a
          href="https://github.com/Magnus93/stochsd"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>
      <br />
      <h2>Open-Source License</h2>
      <p>
        <b>StochSD</b> is based on the open source part of Insight Maker. {" "}
        StochSD’s source code (including the open source part of {" "}
        Insight Maker) is released under a custom license called {" "}
        <i>Insight Maker Public License</i>, which is based on the Affero GPL.{" "}
        Insight Maker’s Public License is available at: {" "}
        <a 
          href="https://insightmaker.com/impl"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://insightmaker.com/impl.
        </a>
        <br/>
        <br/>
        <i>Insight Maker Public License</i> thus covers all StochSD’s {" "}
        JavaScript, HTML and CSS code for StochSD. The original {" "}
        non-open source code in Insight Maker, such as ExtJS and mxGraph{" "}
        are completely eliminated and replaced in StochSD.
        <br/>
        <br/>
        All the parts of the code that are from the original Insight Maker are
        copyrighted by Scott Fortmann-Roe and the files specific to StochSD are
        copyrighted by Erik Gustafsson and Magnus Gustafsson. 
        <br/>
        <br/>
        <h3>Responsibility</h3>
        The user is fully responsible for the use of StochSD and its tools.{" "}
        The producer and the supplier of this code take no responsibility{" "}
        for the use or functioning of StochSD and its tools.
      </p>
    </div>
  );
};

export default software;
