import React, { Component } from 'react';
import './CharItem.css';

class CharComponent extends Component {
  render() {
    return (
      <div className="CharItem">
        <p onClick={ this.props.click } >{this.props.charItem}</p>
      </div>
    )
  }
}

export default CharComponent;
