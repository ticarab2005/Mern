import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const New = () => {
    const [form, setForm] = useState({
        name: ""
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res => {
                console.log(res);
                history.push(`/`);
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h3 style={{ color: "indigo" }}>Add a new author:</h3>
            <div className="mx-5 box">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control mb-2' name='name' onChange={onChangeHandler} />
                        <span className="alert-danger">{errors.name && errors.name.message}</span>
                        <br />
                    </div>
                    <Link className='btn btn-primary wide' to={"/"}>Cancel</Link>
                    <input type="submit" className='btn btn-primary wide mx-2' value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default New;