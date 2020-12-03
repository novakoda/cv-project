import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Name />
      </div>
    );
  }
}

export default App;
