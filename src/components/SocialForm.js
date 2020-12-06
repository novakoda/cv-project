import React, { Component } from 'react';
import data from '../data';

class SocialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      website: '',
      userName: ''
    };
    this.updateState = this.updateState.bind(this);
    this.addSocial = this.addSocial.bind(this);
  }

  addSocial(e) {
    e.preventDefault();
    if (this.state.website === '' || this.state.userName === '') return;
    data.social.push({
      id: data.social.length,
      website: this.state.website,
      userName: this.state.userName
    });
    this.props.done();
  }

  updateState(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addSocial}>
        <div className="form-group">
          <label>Website
            <input
              type="text"
              id="website"
              value={this.state.website}
              placeholder="eg. Facebook"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Username
            <input
              type="text"
              id="userName"
              value={this.state.userName}
              placeholder="John Smith"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    )
  }


}

export default SocialForm;
