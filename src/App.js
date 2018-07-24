import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Manuals from './Components/Manuals';
import Software from './Components/Software';
import Examples from './Components/Examples';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='menuArea'>
          <Menu/>
        </div>
        <div className="viewArea">
          <BrowserRouter>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/stochsim_software"} component={Software} />
              <Route path={"/stochsim_and_statres_manuels"} component={Manuals} />
              <Route path={"/example_models"} component={Examples} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
