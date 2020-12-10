import React, { Component } from 'react';
import data from '../data';
import SchoolForm from './SchoolForm';

export default class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolEdit: false,
      schools: data.schools,
    }
    this.editSchool = this.editSchool.bind(this);
    this.delSchool = this.delSchool.bind(this);
  }

  editSchool() {
    this.setState({ schoolEdit: !this.state.schoolEdit });
  }

  delSchool(e) {
    data.schools.splice(e.target.id, 1);
    data.schools = data.schools.map((school, index) => {
      return {...school, id: index};
    });
    this.setState({ schools: data.schools });
  }

  render() {
    const schools = this.state.schools.map((s) => {
      return (
        <div key={s.id}>
          <div className='item-icon'>
            <h4>{s.school}</h4>
            <i
              id={s.id}
              style={{ display: this.state.schoolEdit ? 'inline-block' : 'none' }}
              onClick={this.delSchool}
              className="far fa-trash-alt"
            ></i>
          </div>
          <p><b>{s.date}</b></p>
          <p>{s.studies}</p>
        </div>
      )
    })
    return (
      <div>
        <h2 style={{ display: 'inline-block' }}>Education</h2>
        <i
          className="fas fa-edit"
          onClick={this.editSchool}
        ></i>
        { this.state.schoolEdit && <SchoolForm done={this.editSchool} /> }
        { this.state.schools && schools }
      </div>
    )
  }
}
