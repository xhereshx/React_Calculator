//rce to create this all
import React, { Component } from 'react'

class Test extends Component {
    //rconst to create constructor
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Michal',
             
        }
        console.log('LifeCycle constructor') //mounting aswell
    }
    // before mounting probably
     compomentwillMount(){
         // this method is called just one time before initial fender method
         // no props
         // this is to setup before initial render
         console.log("Executed before the component is mounted");
        //  console.log(ReactDOM.findDOMNode(this));
     }

     // render
    // mounting

    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }
    // updating
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    // render

    // update
    componentDidUpdate(){
        console.log('componentDidupdate')
    }
    changeState =() =>{
        this.setState({
            name: 'Code evolution'
        })
    }
    
    render() {
        console.log('Lifecycle render')
        return (
            <div>
                <p>LifeCycle</p>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default Test;
