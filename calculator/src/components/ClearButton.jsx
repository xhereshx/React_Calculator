import React, { Component } from "react";

class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="clearButton">
        <button className="clearButton" onClick={this.props.ClearButton}>
          Clear Button
        </button>
      </div>
    );
  }
}

export default Operator;
