import React from "react";
import { useParams } from "react-router";

const Number = (props) => {
    const{num} = useParams();

    const 

    return (
        <div>
            <h1>The number is: {num}!</h1>
        </div>
    )
}

export default Number;