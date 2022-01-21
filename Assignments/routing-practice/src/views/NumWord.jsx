import { useParams } from "react-router";
import React from "react";

const NumWord = () => {
    const{value} = useParams();
    // console.log(isNaN(value))

    return (
        <div>
            {
                isNaN(value) ?
                <h1>The word is: {value}!</h1>
                : <h1>The number is: {value}!</h1> 
            }
            
            
        </div>
    )
}

export default NumWord;