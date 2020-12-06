import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Info />
        <Experience />
      </div>
    );
  }
}

export default App;
