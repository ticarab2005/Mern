import React, { useState } from "react";

const FunctionalCounter = (props) => {
    // const {start} = props;
    const [counter, setCounter] = useState(props.start);
    const [hover, setHover] = useState(false);

    const style = {
        backgroundColor: "black",
        color: "white"
    }

    const increaseCounter = () => {
        // console.log("clicked functional")
        setCounter(counter + 1);
    }

    const onHoverHandler = () => {
        // console.log("hovering on functional")
        setHover(!hover)
    }



    return (
        <div>
            <div style={hover ? style : {}} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
                <div>you clicked {counter} times!!! but now it's cool because it's functional</div>
                <button onClick={increaseCounter}>clicked me!!!</button>
            </div>
        </div>
    );
}

export default FunctionalCounter;