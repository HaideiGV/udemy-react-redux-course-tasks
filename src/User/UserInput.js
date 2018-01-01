import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput">
        <input className="TextInput" type="text" onChange={this.props.changed}/>
      </div>
    )
  }
}

export default UserInput;
