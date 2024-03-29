import React from "react";
import './Software.css';
import ExternLink from './../ExternLink';
import {downloadSoftwareUrl} from "../../globals";

const software = () => {

  const year = new Date().getFullYear();

  return (
    <div>
      <h1>StochSD Software</h1>
      <p>
        <b>StochSD</b> is an open-source software for stochastic and dynamic modelling and simulation. It also contains tools for statistical post-analysis from multiple simulations.
      </p>
      <p>
        <b>StochSD</b> is available in two versions: <b>StochSD Desktop</b> which you download to your computer, and <b>StochSD Web</b> which you can run in a web browser. Supported web browsers are: Google Chrome, Mozilla Firefox and Microsoft Edge. The Desktop version is recommended because it can more easily work with local files.
      </p>
      <p>
        <ExternLink to={downloadSoftwareUrl}>StochSD Desktop</ExternLink> (download)
        <br />
        <ExternLink to="https://stochsd.sourceforge.io/software/">StochSD Web</ExternLink> (online)
      </p>
      <p>
        The open-source code for StochSD is available <ExternLink to="https://github.com/stochsd/stochsd">here</ExternLink>.
      </p>
      <br/>
      <h3>About the Open-Source Licenses</h3>
      <p>
        Copyright &copy; {year} StochSD. 
      </p>
      <p>
        <b>StochSD</b> uses the <ExternLink to="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License</ExternLink>.
      </p>
      <p>
        StochSD is based on the open-source part of Insight Maker. StochSD&#39;s source code (including the open-source part of Insight Maker) is released under a custom license called <i>Insight Maker Public License</i>, which is based on the Affero GPL. Insight Maker&#39;s Public License is available at: <ExternLink to="https://insightmaker.com/impl">https://insightmaker.com/impl</ExternLink>. <i>Insight Maker Public License</i> thus covers all StochSD&#39;s JavaScript, HTML and CSS code for StochSD. All parts of the code that are from the original Insight Maker are copyrighted by Scott Fortmann-Roe and the files specific to StochSD are copyrighted by Erik Gustafsson and Magnus Gustafsson. An additional number of open-source packages are also included in StochSD.
      </p>
      <p>
        The full licenses are found in StochSD under <i>Help &rarr; StochSD License</i>, and <i>Help &rarr; Third-party Licenses</i>.
      </p>
      <p>
        <br/>
        <h3>Responsibility</h3>
        The user is fully responsible for the use of StochSD and its tools. The producer and the supplier of this code take no responsibility for the use or functioning of StochSD and its tools.
      </p>
    </div>
  );
};

export default software;
