import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Logo from '../../Images/stochsd.svg'; 
import Bath from '../../Images/bath_mirror.png';

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" id="iconImg" />
			<h1>StochSD</h1>
      <ul>
        <li className="topmenu"><Link to="/home">Home Page</Link></li>
        <li className="topmenu"><Link to="/stochsd_software">Software</Link>
        <ul>
          <li className="submenu"><a href="https://stochsd.sourceforge.io/software/" target="_blank">Try StochSD online</a></li>
          <li className="submenu"><a  href="https://sourceforge.net/projects/stochsd/files/" target="_blank">Download StochSD</a></li>
          <li className="submenu"><a href="https://github.com/stochsd/stochsd/" target="_blank">Source code</a></li>
        </ul>
        </li>
        <li className="topmenu"><Link to="/stochsd_and_statres_manuels">User's Manuals</Link></li>
        <li className="topmenu"><Link to="/example_models">Example Models</Link></li>
        <li className="topmenu"><Link to="/labs">Lab Exercises</Link></li>
      </ul>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
