import React, { Component } from 'react';
import data from '../data';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: data.contact.email,
      phone: data.contact.phone,
    };
    this.updateState = this.updateState.bind(this);
    this.changeContact = this.changeContact.bind(this);
  }

  changeContact(e) {
    e.preventDefault();
    data.contact.email = this.state.email;
    data.contact.phone = this.state.phone;
    this.props.done;
  }

  updateState(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.changeContact}>
        <div className="form-group">
          <label>Email
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Phone Number
            <input
              type="tel"
              id="phone"
              value={this.state.phone}
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <button className="btn btn-primary mt-1">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
