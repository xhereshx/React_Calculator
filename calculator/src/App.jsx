import React, { Component } from "react";
import Buttons from "./testingFiles/Buttons";
import Count from "./testingFiles/Count";
import CountHook from "./testingFiles/CountHook";
import LiveCycle from "./testingFiles/LiveCycle";
import Test from "./testingFiles/Test";
import Hero from "./testingFiles/Hero";
import ErrorBoundary from "./testingFiles/ErrorBoundary";
import Operator from "./testingFiles/Operator";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testvalue: ["test"],
      label: [],
      value: [],
    };
  }

  ClearButton = () => {
    this.setState({ value: "" });
  };

  handleEqual = () => {
    this.setState({ value: math.evaluate(this.state.value) });
  };

  handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    console.log(value);
    this.setState({ value: this.state.value + value });
  };
  render() {
    return (
      <div className="App">
        <div className="numberButtonsFlexboxTwo">
          <Input value={this.state.value} />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="7"
            value="7"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="8"
            value="8"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="9"
            value="9"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="/"
            value="/"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="4"
            value="4"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="5"
            value="5"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="6"
            value="6"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="*"
            value="*"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="1"
            value="1"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="2"
            value="2"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="3"
            value="3"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="+"
            value="+"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="."
            value="."
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="0"
            value="0"
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={() => this.handleEqual()}
            label="="
            value="="
          />
          <Button
            testvalue={this.state.testvalue}
            onClick={this.handleClick}
            label="-"
            value="-"
          />
          <ClearButton ClearButton={this.ClearButton} />
        </div>
      </div>
    );
  }
}

export default App;
