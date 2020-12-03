import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';

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
      </div>
    );
  }
}

export default App;
