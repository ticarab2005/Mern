import React, {Component} from 'react';

class Box extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.dark?"dark":"white"}>
            <marquee>
                {this.props.children}
                <h1>
                    {this.props.dark && <h1>DARK MODE ENGAGE‽‽‽</h1>}
                    {this.props.text}
                </h1>
            </marquee>

            </div>
        )
    }
}

export default Box;