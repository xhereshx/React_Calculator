import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="inputfield">
        <p className="inputFieldText">{this.props.value}</p>
      </div>
    );
  }
}

export default Input;
