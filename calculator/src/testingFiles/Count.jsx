import React, { Component } from 'react';


class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0  
        };
        // this.AddOne =this.AddOne.bind(this);
    }
    AddOne = () => {
        this.setState({count: this.state.count +1 })
    }
    DeductOne = () => {
        this.setState({count: this.state.count -1})
    }
    render() { 
    return ( <div><p>{this.state.count}</p>
            <button onClick={ ()=>this.AddOne()} >addition</button>
            <button onClick={ ()=>this.DeductOne()} >deduction</button>
            </div> 
            );
    }
}
 
export default Count;