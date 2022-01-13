import React, { Component } from 'react';

class Pixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false
        }
    }

    clixel = () => {
        this.setState({filled: !this.state.filled})
    }

    render() {
        return (
            <div onClick={this.clixel} className={this.state.filled ? "pixel filled":"pixel unfilled"}>

            </div>
        );
    }
}

export default Pixel;