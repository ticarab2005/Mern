import React from "react";

const BoxGenerator = (props) => {
    return(
        <div>
            <div className="rows">
                {props.createColorBox.map((color,i) => {
                    return <div key={i} className="box" style={{background:color}}>
                    </div>
                }
                )}
            </div>
        </div>
    );
};

export default BoxGenerator;