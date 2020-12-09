import React, { Component } from 'react';
import data from '../data';

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      duties: '',
      date: '',
    };
    this.addJob = this.addJob.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  addJob(e) {
    e.preventDefault();
    if ( this.state.company === '' || this.state.position === '' || this.state.duties === '' || this.state.date === '') return;
    data.jobs.push({
      id: data.jobs.length,
      company: this.state.company,
      position: this.state.position,
      duties: this.state.duties,
      date: this.state.date,
    });
    this.props.done();
  }

  updateState(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addJob}>
        <div className="form-group">
          <label>Company
            <input
              type="text"
              id="company"
              value={this.state.company}
              placeholder="e.g. Umbrella Corporation"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Position
            <input
              type="text"
              id="position"
              value={this.state.position}
              placeholder="Data Researcher"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Date
            <input
              type="text"
              id="date"
              value={this.state.date}
              placeholder="2004 - Current"
              onChange={this.updateState}
              className="form-control"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>Job Duties
            <textarea
              id="duties"
              value={this.state.duties}
              placeholder=""
              onChange={this.updateState}
              className="form-control"
            ></textarea>
          </label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    )
  }


}

export default JobForm;
