import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const Edit = (props) => {
    const {_id} = useParams();
    const [form, setForm] = useState({
        author:""
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${_id}`)
            .then(res=>{
                console.log(res.data.results);
                setForm(res.data.results);
            })
            .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${_id}/update`,form)
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
            <h3>Edit author:</h3>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="author">Name:</label>
                <input type="text" name="author" className="form-control" placeholder="author" onChange={onChangeHandler} value={form.author}/>
                    <span className="alert-danger">{errors.author && errors.author.message}</span>
                <br />
                <Link className="btn btn-warning mx-3" to={`/`}>Cancel</Link>
                <input type="submit" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Edit;