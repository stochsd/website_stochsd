import React from "react";

const software = () => {
  return (
    <div>
      <h1>StochSim Software</h1>
      <p>
        <b>StochSim</b> is a rudimentary software, primarilly developed to
        introduce statistical post-analysis from multiple simulations with the
        included tool <b>StatRes</b>. However, <b>StatRes</b> is an advanced and
        well tested software that may be reused together with other CSS
        packages. For this purpose we have included the source code.
        <br />
        <br />
        <b>StochSim</b> (including <b>StatRes</b>) is available in two form.{" "}
        <b>StochSim Web</b> which you run in your web browser and{" "}
        <b>StochSim Desktop</b> which you download to your computer.
      </p>
      <a
        href="https://stochsd.sourceforge.io/software/MultiSimulationAnalyser/index.html"
        target="_blank"
      >
        StochSim Web
      </a>{" "}
      (online)<br />
      <a href="https://sourceforge.net/projects/stochsd/files/" target="_blank">
        StochSim Desktop
      </a>{" "}
      (download)<br />
      <br /> StochSim Source code is available <a
        href="https://sourceforge.net/p/stochsd/code/ci/master/tree/"
        target="_blank"
      >
        here
      </a>
      <br />
      <br />
      <br />
      <h2>Open Source License</h2>
      <p>
        StochSim is a fork of Insight Maker. Both StochSim and Insight Maker are
        released under Insight Maker Public License.<br />
        <br />
        The non-Open Source parts (MxGraph and ExtJS) used in Insight Maker, are
        not used in StochSim.<br />
        <br />
        Insight Maker Public license comes from the Insght Maker project and is
        available at:<br />
        <a href="https://insightmaker.com/impl" target="_BLANK">
          https://insightmaker.com/impl
        </a>
        <br />
        <br />
        All the parts of the code that are from the original Insight Maker are
        copyrighted by Scott Fortmann-Roe and the files specific to StochSim are
        copyrighted by Erik Gustafsson. <br />
      </p>
    </div>
  );
};

export default software;
