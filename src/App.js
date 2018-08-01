import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Manuals from './Components/Manuals';
import Software from './Components/Software';
import Examples from './Components/Examples';
import ReactGA from 'react-ga';

// Google analytics tracker code 
ReactGA.initialize('UA-123014062-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="App">
          <div className='menuArea'>
            <Menu/>
          </div>

      <Switch>

        <div className="viewArea">
              <Route path={"/"} exact component={Home} />
              <Route path={"/home"} exact component={Home} />
              <Route path={"/stochsim_software"} component={Software} />
              <Route path={"/stochsim_and_statres_manuels"} component={Manuals} />
              <Route path={"/example_models"} component={Examples} />
        </div>
      </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
