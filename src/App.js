import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Manuals from './Components/Manuals';
import Software from './Components/Software';
import Examples from './Components/Examples';
import Labs from './Components/Labs';
import FullPotentialCSS from './Components/FullPotentialCSS';
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags';

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
          <MetaTags>
            <meta property="og:title" content="StochSD Homepage" />
            <meta property="og:image" content="https://stochsd.sourceforge.io/images/bath.png" />
          </MetaTags>
            <Route path={"/"} exact component={Home} />
            <Route path={"/home"} exact component={Home} />
            <Route path={"/stochsd_software"} component={Software} />
            <Route path={"/stochsd_and_statres_manuels"} component={Manuals} />
            <Route path={"/example_models"} component={Examples} />
            <Route path={"/labs"} component={Labs} />
            <Route path={"/full_potential_css"} component={FullPotentialCSS} />
        </div>
      </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
