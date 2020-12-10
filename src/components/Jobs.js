import React, { Component } from 'react';
import data from '../data';
import JobForm from './JobForm';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobEdit: false,
      jobs: data.jobs,
    };
    this.editJobs = this.editJobs.bind(this);
    this.delJob = this.delJob.bind(this);
  }

  editJobs() {
    this.setState({ jobEdit: !this.state.jobEdit });
  }

  delJob(e) {
    data.jobs.splice(e.target.id, 1);
    data.jobs = data.jobs.map((job, index) => {
      return { ...job, id: index };
    })
    this.setState({ jobs: data.jobs });
  }

  render() {
    const jobs = this.state.jobs.map((j) => {
      return (
        <div key={j.id}>
          <div className='item-icon'>
            <h4>{j.company}</h4>
            <i
              id={j.id}
              style={{ display: this.state.jobEdit ? 'inline-block' : 'none' }}
              onClick={this.delJob}
              className="far fa-trash-alt"
            ></i>
          </div>
          <h5>{j.position}</h5>
          <p><b>{j.date}</b></p>
          <p>{j.duties}</p>
        </div>
      )
    });

    return (
      <div>
        <h2 style={{display: 'inline-block'}}>Work Experience</h2>
        <i
          className="fas fa-edit"
          onClick={this.editJobs}
        ></i>
        { this.state.jobEdit && <JobForm done={this.editJobs} /> }
        { this.state.jobs && jobs }
      </div>
    )
  }
}

export default Jobs;
