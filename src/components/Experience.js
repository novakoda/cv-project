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
      <section className="xp ml-2 pl-2">
        <Jobs />
        <hr style={{borderTop: '1px solid black'}}/>
        <School />
      </section>
    );
  }
}

export default Experience;
