import React, { Component } from "react";
import "../App.scss";
import Input from "../components/Input";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
    };
  }

  // setNumber = (number) => {
  //   console.log(number);
  //   this.props.numbers.map((number, i) => {
  //     console.log(number);
  //   });
  //   this.setState({ number: number });
  // };

  setNumber = () => {
    // console.log(number);
    this.props.numbers.map((number, i) => {
      // console.log(number);
      this.setState({ number: this.state.number + this.props.numbers });
      console.log(number);
    });
  };

  // setNumber = (number) => {
  //   console.log(number);
  // };
  render() {
    let testnumber = "";

    return (
      <div className="numberButtonsFlexbox">
        {/* {console.log(testnumber)} */}
        <Input>{testnumber}</Input>
        {
          (testnumber = this.props.numbers.map((number, i) => {
            // var number = "";
            return (
              <button
                className="numberButtons"
                key={i}
                // onClick={() => console.log(number)}
                onClick={() => this.setNumber()}
              >
                {number}
                {/* <Input number={number} /> */}
              </button>
            );
          }))
        }

        {/* <button>{this.props.id}</button> */}
      </div>
      // <button onClick={() => this.setNumber()}>Test</button>
    );
  }
}
export default Buttons;
