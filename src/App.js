import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';
import Experience from './components/Experience';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-border">
          <Info />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
