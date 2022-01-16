import React from 'react';

const Step = (props)=> {
    return (
        <div className='step'>
            <span>
                {props.direction=== "left" ? "⬅"
                    : props.direction == "right"? "➡"}
            </span>
        </div>
    );
}