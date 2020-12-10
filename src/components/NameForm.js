import React, { Component } from 'react';
import data from '../data';

class NameForm extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      firstName: data.name.first,
      lastName: data.name.last,
    };
    this.updateState = this.updateState.bind(this);
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

  updateState(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.changeName}>
        <div class="form-group">
          <label>First Name
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div class="form-group">
          <label>Last Name
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <button className="btn btn-primary mt-1">Submit</button>
      </form>
    )
  }
}

export default NameForm;
