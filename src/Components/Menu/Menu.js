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
      <p><a href="/software">StochSim Software</a></p>
      <p><a href="/manuals">StochSim and StatRes Manuals</a></p>
      <p><a href="/examples">Example Models</a></p>
    </div>
  );
};

export default menu;
