import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="numberButtons"
        data-value={this.props.value}
      >
        {this.props.label}
      </button>
    );
  }
}
export default Button;
