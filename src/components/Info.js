import React, { Component } from 'react';
import data from '../data';
import Name from './Name';
import Contact from './Contact';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <section>
        <Name />
        <Contact />
      </section>
    );
  }
}

export default Info;
