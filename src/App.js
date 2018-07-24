import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Manuals from './Manuals/Manuals';
import Software from './Software/Software';
import Examples from './Examples/Examples';
import Logo from './Logo/stochsim.svg'; 

class App extends Component {
  state = {
    page: 'home'
  };

  render() {
    return (
      <div className="App">
        <div className='menuArea'>
          <div className='menu'>
            <img src={Logo} alt="Icon is missing"/>
            <h2>Menu</h2>
            <p><a href='/'>Purpose of Stochastic CSS</a></p>
            <p><a href='/dummy'>Stochastic CSS</a></p>
            <p><a href='/software'>StochSim Software</a></p>
            <p><a href='/manuals'>StochSim and StatRes Manuals</a></p>
            <p><a href='/examples'>Example Models</a></p>
          </div>
        </div>
        <div className="viewArea">
          <BrowserRouter>
            <Switch>
              <Route path={"/"} component={Home} />
              <Route path={"/software"} component={Software} />
              <Route path={"/examples"} component={Examples} />
              <Route path={"/manuals"} component={Manuals} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
