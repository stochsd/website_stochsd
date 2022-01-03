import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Logo from '../../Images/stochsd.svg'; 
import Bath from '../../Images/bath_mirror.png';
import ExternLink from './../ExternLink';

const menu = () => {
  return (
    <div className="menu">
      <Link to="/home"><img src={Logo} alt="Icon is missing" id="iconImg" /></Link>
			<h1>StochSD</h1>
      <ul>
        <li className="topmenu"><Link to="/home">Home Page</Link></li>
        <li className="topmenu"><Link to="/stochsd_software">Software</Link>
        <ul>
          <li className="submenu"><ExternLink to="https://stochsd.sourceforge.io/software/">Try StochSD online</ExternLink></li>
          <li className="submenu"><ExternLink to="https://sourceforge.net/projects/stochsd/files/">Download StochSD</ExternLink></li>
          <li className="submenu"><ExternLink to="https://github.com/stochsd/stochsd/">Source code</ExternLink></li>
        </ul>
        </li>
        <li className="topmenu"><Link to="/stochsd_and_statres_manuels">User's Manuals</Link></li>
        <li className="topmenu"><Link to="/example_models">Example Models</Link></li>
        <li className="topmenu"><Link to="/labs" className="course">Course Material</Link></li>
      </ul>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
