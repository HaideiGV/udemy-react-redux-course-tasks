import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.changed} value={this.props.value} />
      </div>
    )
  }
}

export default TextInput;
