import React, { Component } from 'react';
import data from '../data';
import Jobs from './Jobs';


class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <section>
        <Jobs />
      </section>
    );
  }
}

export default Experience;
