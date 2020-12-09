import React, { Component } from 'react';
import data from '../data';
import SocialForm from './SocialForm';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialEdit: false,
      socials: data.social
    };
    this.editSocial = this.editSocial.bind(this);
    this.delSocial = this.delSocial.bind(this);
  }

  editSocial() {
    this.setState({ socialEdit: !this.state.socialEdit });
  }

  delSocial(e) {
    data.social.splice(e.target.id, 1);
    data.social = data.social.map((soc, index) => {
      return { ...soc, id: index };
    });
    this.setState({ socials: data.social });
  }

  render() {
    const socials = this.state.socials.map((s) => {
      return (
        <div key={s.id}>
          <p><b>{s.website}: </b>{s.userName}</p>
          <i
            id={s.id}
            style={{ display: this.state.socialEdit ? 'inline-block' : 'none' }}
            onClick={this.delSocial}
            className="far fa-trash-alt"
          ></i>
        </div>
      )
    });

    return (
      <div>
        <h2 style={{display: 'inline-block'}}>Social</h2>
        <i
          className="fas fa-edit"
          onClick={this.editSocial}
          style={{
            display: this.state.socialEdit ? 'none' : 'inline-block'
          }}
        ></i>
        { this.state.socialEdit && <SocialForm done={this.editSocial} /> }
        { this.state.socials && socials }
      </div>
    )
  }

}

export default Social;
