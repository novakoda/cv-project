import React, { Component } from 'react';
import data from '../data';
import NameForm from './NameForm'

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEdit: false,
    };
    this.editName = this.editName.bind(this);

  }

  editName() {
    this.setState({ nameEdit: !this.state.nameEdit });
  }

  render() {
    return (
      <section>
        {
          this.state.nameEdit ? (
            <NameForm done={this.editName}/>
          ) : (
            <h1 onClick={this.editName}>{data.name.first + ' ' + data.name.last}</h1>
          )
        }
        <h3>{data.name.first + ' ' + data.name.last}</h3>

      </section>
    );
  }
}

export default Name;
