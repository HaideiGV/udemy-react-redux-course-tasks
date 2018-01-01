import React, { Component } from 'react';

class TextValidation extends Component {
  render() {
    return (
      <div>
        <p>{this.props.textLength > 0 ? this.props.textLength : "Empty string" } - {this.props.message}</p>
      </div>
    )
  }
}

export default TextValidation;
