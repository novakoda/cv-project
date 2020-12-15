import React, { useState } from 'react';
import data from '../data';

const NameForm = props => {
  const [name, setName] = useState({
    firstName: data.name.first,
    lastName: data.name.last
  });

  const changeName = e => {
    e.preventDefault();
    // console.log('pre ' + data.name.first, data.name.last + ' | ', this.state.firstName, this.state.lastName);
    data.name.first = name.firstName;
    data.name.last = name.lastName;
    props.done();
    // console.log('post ' + data.name.first, data.name.last + ' | ', this.state.firstName, this.state.lastName);
  }

  const updateName = e => {
    setName({ ...name, [e.target.id]: e.target.value });
  }

  return (
    <form onSubmit={changeName}>
      <div className="form-group">
        <label>First Name
          <input
            type="text"
            id="firstName"
            value={name.firstName}
            onChange={updateName}
            className="form-control"
          ></input>
        </label>
      </div>
      <div className="form-group">
        <label>Last Name
          <input
            type="text"
            id="lastName"
            value={name.lastName}
            onChange={updateName}
            className="form-control"
          ></input>
        </label>
      </div>
      <button className="btn btn-primary mt-1">Submit</button>
    </form>
  )

}

export default NameForm;
