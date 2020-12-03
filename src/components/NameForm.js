import React, { Component } from 'react';
import data from '../data';

class NameForm extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      firstName: data.name.first,
      lastName: data.name.last,
    };
    this.doChange = this.doChange.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    e.preventDefault();
    // console.log('pre ' + data.name.first, data.name.last + ' | ', this.state.firstName, this.state.lastName);
    data.name.first = this.state.firstName;
    data.name.last = this.state.lastName;
    this.props.done();
    // console.log('post ' + data.name.first, data.name.last + ' | ', this.state.firstName, this.state.lastName);
  }

  doChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.changeName}>
        <label>First Name
          <input
            type="text"
            id="firstName"
            value={this.state.firstName}
            onChange={this.doChange}
          ></input>
        </label>
        <label>Last Name
          <input
            type="text"
            id="lastName"
            value={this.state.lastName}
            onChange={this.doChange}
          ></input>
          <button>Change</button>
        </label>
      </form>
    )
  }
}

export default NameForm;
