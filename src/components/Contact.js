import React, { Component } from 'react';
import data from '../data';
import ContactForm from './ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactEdit: false
    }

    this.editContact = this.editContact.bind(this);
  }

  editContact() {
    this.setState({ contactEdit: !this.state.contactEdit });
  }

  render() {
    return (
      <div>
        <h2 style={{display: 'inline-block'}}>Contact</h2>
        <i
          className="fas fa-edit"
          onClick={this.editContact}
        ></i>
        {
          this.state.contactEdit ? <ContactForm done={this.editContact}/> : (
            <div>
              <p><b>Email: </b>{data.contact.email}</p>
              <p><b>Phone Number: </b>{data.contact.phone}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default Contact;
