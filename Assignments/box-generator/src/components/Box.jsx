import React, { useState } from "react";

const Box = (props) => {
    const [color, setColor] = useState([]);

    // const createColor = (event) => {
    //     setColor({
    //         color,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onNewColor(color);
    };

    return (
        <div className="App w-25 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="fs-3">Color</label>
                    </div>
                    <div className="col-auto" style={{ width: 300 }}>
                        <input
                            type="text"
                            placeholder="color here..."
                            className="form-control"
                            onChange={(event) => setColor(event.target.value)}
                            value={color}
                        />
                    </div>
                    <div className="col-auto button">
                        <input type="submit" value="Add" className="btn btn-success mb-4" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Box;
