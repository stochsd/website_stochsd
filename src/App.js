import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home.js';


class App extends Component {
  state = {
    page: 'homepage'
  };

  render() {
    let viewpage;
    if (this.state.page == 'homepage') {
      viewpage = <Home/>
    }
    return (
      <div className="App">
        <div>
          menu
        </div>
        {viewpage}
      </div>
    );
  }
}

export default App;
