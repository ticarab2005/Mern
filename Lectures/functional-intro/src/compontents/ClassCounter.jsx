import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.start,
            hover: false
        }
    }

    increaseCounter = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        });
    }

    onHoverHandler = () => {
        this.setState({
            ...this.state,
            hover: !this.state.hover
        });
    }

    render() {
        const style = {
            backgroundColor: "black",
            color: "white"
        }
        return (
            <div style={this.state.hover ? style: {}} onMouseEnter={this.onHoverHandler} onMouseLeave={this.onHoverHandler}>
                <div>you clicked {this.state.counter} times!!!</div>
                <button onClick={this.increaseCounter}>clicked me!!!</button>
            </div>
        );
    }
}

export default ClassCounter;