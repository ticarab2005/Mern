import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increaseCounter = () => {
        // state cannot be directly manipulated like this
        // console.log("clicked!!!");
        // this.state.counter += 1;
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <div> You clicked on me {this.state.counter} times </div>
                <button onClick={this.increaseCounter}> click me!!! </button>
            </div>
        );
    }
}

export default Counter;
