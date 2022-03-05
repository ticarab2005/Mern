import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  } from 'react-router-dom';
import { Link, useHistory, useParams } from "react-router-dom";

const EditAuthor = () => {
    const {_id} = useParams();
    const [form, setForm] = useState({
        name: ""
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(()=> {
        console.log(_id)
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res.data.results);
                setForm(res.data.results);
            })
            .catch(err=> console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/${_id}/update`, form)
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
            <h3 style={{ color: "indigo" }}>Edit this author</h3>
            <div className="mx-5 box">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control mb-2' value={form.name} name='name' onChange={onChangeHandler} />
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

export default EditAuthor;