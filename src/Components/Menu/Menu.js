import React from "react";
import './Menu.css';
import Logo from '../../Images/stochsim.svg'; 

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" />
			<h1>StochSim</h1>
      <p><a href="/">Purpose of Stochastic CSS</a></p>
      <p><a href="/dummy">Stochastic CSS</a></p>
      <p><a href="/stochsim_software">StochSim Software</a></p>
      <p><a href="/stochsim_and_statres_manuels">StochSim and StatRes Manuals</a></p>
      <p><a href="/example_models">Example Models</a></p>
    </div>
  );
};

export default menu;
