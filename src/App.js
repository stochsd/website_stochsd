import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Manuals from './Manuals/Manuals';
import Software from './Software/Software';
import Examples from './Examples/Examples';
import Logo from './Logo/stochsim.svg'; 


class App extends Component {
  state = {
    page: 'home'
  };

  changePagehandler = (event) => {
    this.setState({page: event.target.getAttribute("page")})
  }

  render() {
    let viewpage;
    switch(this.state.page) {
      case "home":
        viewpage = <Home/>;
        break;
      case "manuals":
        viewpage = <Manuals/>;
        break;
      case "examples":
        viewpage = <Examples/>;
        break;
      case "software":
        viewpage = <Software/>;
        break;
      case "dummy":
        viewpage = 'nothing here';
        break;
      default:
        viewpage = 'empty';
        break;
    }

    return (
      <div className="App">
        <div className='menuArea'>
          <div className='menu'>
            <img src={Logo} alt="Icon is missing"/>
            <h2>Menu</h2>
            <p onClick={this.changePagehandler} page='home'>Purpose of Stochastic CSS</p>
            <p onClick={this.changePagehandler} page='dummy'>Stochastic CSS</p>
            <p onClick={this.changePagehandler} page='software'>StochSim Software</p>
            <p onClick={this.changePagehandler} page='manuals'>StochSim and StatRes Manuals</p>
            <p onClick={this.changePagehandler} page='examples'>Example Models</p>
          </div>
        </div>
        <div className="viewArea">
          {viewpage}
        </div>
      </div>
    );
  }
}

export default App;
