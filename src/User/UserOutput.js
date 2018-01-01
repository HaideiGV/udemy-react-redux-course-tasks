import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
  render() {
    return (
      <div className="UserOutput">
        <p className="UserName">User: { this.props.name }</p>
        <input type="text" onChange={ this.props.changed } />
        <p
          className="ClickedName"
          onClick={ this.props.click }
        >CLICK FOR DELETE</p>
      </div>
    )
  }
}

export default UserOutput;
