import React, { Component } from 'react';
import data from '../data';
import Jobs from './Jobs';
import School from './School';


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
        <School />
      </section>
    );
  }
}

export default Experience;
