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
        viewpage = <Home className="viewArea"/>
        break;
      case "manuals":
        viewpage = <Manuals/>
        break;
      case "examples":
        viewpage = <Examples/>
        break;
      case "software":
        viewpage = <Software/>
        break;
      case "dummy":
        viewpage = <Manuals/>
        break;
      default:
        viewpage = 'empty'
        break;
    }

    return (
      <div className="App">
        <div className='menuArea'>
          <div className='menu'>
            <img src={Logo} alt="Icon is missing"/>
            <h3>Menu</h3>
            <p onClick={this.changePagehandler} page='home'>Home</p>
            <p onClick={this.changePagehandler} page='manuals'>Manuals</p>
            <p onClick={this.changePagehandler} page='examples'>Examples</p>
            <p onClick={this.changePagehandler} page='software'>Software</p>
            <p onClick={this.changePagehandler} page='dummy'>dummy pdf</p>
          </div>
        </div>
        {viewpage}
      </div>
    );
  }
}

export default App;
