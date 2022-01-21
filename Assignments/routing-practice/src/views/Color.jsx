import React from "react";
import {useParams } from "react-router-dom";

const Color = () => {
    const {word,color1,color2} = useParams();

    const style = {
        backgroundColor: color1,
        color:color2
    }

    return(
        <div>
            <h1 style={style}>
                The word is: {word}
            </h1>
        </div>
    )
} 

export default Color;