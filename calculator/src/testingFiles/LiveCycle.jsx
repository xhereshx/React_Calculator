import React, { Component } from 'react';
import ReactDom from 'react-dom';

 class LiveCycle extends Component {
     compomentwillMount(){
         // this method is called just one time before initial fender method
         // no props
         // this is to setup before initial render
         console.log("Executed before the component is mounted");
        //  console.log(ReactDOM.findDOMNode(this));
     }
     componentDidMount(){
        // is called after initial render
        // if i need initilize something what relies on DOM
        // perfect place for side effects
         console.log("Executed after the component is mounted");
        //  console.log(ReactDOM.findDOMNode(this));
     }
    render() {
        return (
            <div>
                <p>livecycle</p>
                
            </div>
        )
    }
}
export default LiveCycle;
