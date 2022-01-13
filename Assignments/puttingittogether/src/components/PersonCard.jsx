import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        let age = this.props.age;
        this.state = {
            counter: age
        }
    }

    increaseAge = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.counter}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;