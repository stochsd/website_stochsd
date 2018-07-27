import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import Logo from '../../Images/stochsim.svg'; 
import Bath from '../../Images/bath.png';

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" id="iconImg" />
			<h1>StochSim</h1>
      <p><Link to="home">Purpose of Stochastic CSS</Link></p>
      <p><Link to="stochsim_software">StochSim Software</Link> (Download)</p>
      <p><Link to="stochsim_and_statres_manuels">StochSim and StatRes Manuals</Link></p>
      <p><Link to="example_models">Example Models</Link></p>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
