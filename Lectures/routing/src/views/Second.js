import React from "react";
import { useParams } from "react-router-dom";

const Second = (props) => {
    // destructuring (there is one or many different keys.)
    const {word, color} = useParams();

    const style = {
        backgroundColor: color,
        color:"white"
    }

    return (
        <div>
            yarrrr matey this is the second page here
            <h1 style={style}>your word is {word}</h1>
        </div>
    )
}

export default Second;