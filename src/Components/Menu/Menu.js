import React from "react";
import './Menu.css';
import Logo from '../../Images/stochsim.svg'; 
import Bath from '../../Images/bath.png';

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" id="iconImg" />
			<h1>StochSim</h1>
      <p><a href="/">Purpose of Stochastic CSS</a></p>
      <p><a href="/dummy">Stochastic CSS</a></p>
      <p><a href="/stochsim_software">StochSim Software</a> (Download)</p>
      <p><a href="/stochsim_and_statres_manuels">StochSim and StatRes Manuals</a></p>
      <p><a href="/example_models">Example Models</a></p>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
