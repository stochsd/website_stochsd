import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Logo from '../../Images/stochsd.svg'; 
import Bath from '../../Images/bath.png';

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" id="iconImg" />
			<h1>StochSD</h1>
      <p><Link to="/home">Purpose of Stochastic Simulation - StochSD</Link></p>
      <p><Link to="/stochsd_software">StochSD Software</Link> (Download)</p>
      <p><Link to="/stochsd_and_statres_manuels">StochSD User's Manuals</Link></p>
      <p><Link to="/example_models">Example Models</Link></p>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
