import React, { Component } from 'react';
import data from '../data';

export default class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      studies: '',
      date: '',
    }
    this.addSchool = this.addSchool.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  addSchool(e) {
    e.preventDefault();
    if ( this.state.school === '' || this.state.studies === '' || this.state.date === '' ) return;
    data.schools.push({
      id: data.schools.length,
      school: this.state.school,
      studies: this.state.studies,
      date: this.state.date,
    });
    this.props.done();
  }

  updateState(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addSchool}>
        <div className="form-group">
          <label>School
            <input
              type="text"
              id="school"
              value={this.state.school}
              placeholder="e.g. University of Houston"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Area of Studies
            <input
              type="text"
              id="studies"
              value={this.state.studies}
              placeholder="Computer Science"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Date Attended
            <input
              type="text"
              id="date"
              value={this.state.date}
              placeholder="2016 - 2020"
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
