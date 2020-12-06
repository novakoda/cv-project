import React, { Component } from 'react';
import data from '../data';
import NameForm from './NameForm'

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEdit: false,
    };
    this.editName = this.editName.bind(this);
  }

  editName() {
    this.setState({ nameEdit: !this.state.nameEdit });
  }

  render() {
    return (
      <div>
        {
          this.state.nameEdit ?
            <NameForm done={this.editName}/> : (
            <div className="name-cont">
              <h1 style={{display: 'inline'}}>{data.name.first + ' ' + data.name.last}</h1>
              <i
                className="fas fa-edit"
                onClick={this.editName}
              ></i>
            </div>
          )
        }
      </div>
    );
  }
}

export default Name;
