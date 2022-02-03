import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Create = (props) => {
    const [form, setForm] = useState({
        author:""
    });
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/authors/create",form)
            .then(res =>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })
    }

    return (
        <div className="w-25 mx-auto">
            <Link to={"/"}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="author">Name:</label>
                <input type="text" name="author" className="form-control" onChange={onChangeHandler}/>
                <span className="alert-danger">{errors.author && errors.author.message}</span>
                <br />
                <Link className="btn btn-warning mx-3" to={`/`}>Cancel</Link>
                <input type="submit" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Create;