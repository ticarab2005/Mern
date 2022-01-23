import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Search = (prop) => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        id: "",
        category: "people"
    });


    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(res => {
                console.log(res.data);
                let result = Object.keys(res.data)
                console.log(result)
                setCategories(result)
            })
            .catch(err => console.log(err))
    }, [])




    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${form.category}/${form.id}`)
        console.log("yeahhhhhh I'm clicked!", form)

        axios.get(`https://swapi.dev/api/${form.category}/${form.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const onChangeHandler = (event) => {
        console.log("changed");
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="row justify-content-center my-3 gx-3 gy-2 align-items-center ">
                <div className="col-auto">
                    <h2>Search For:</h2>
                </div>
                <div className="col-auto">
                    <select onChange={onChangeHandler} name="category" className="form-select">
                        {
                            categories.map((category, i) => {
                                return (
                                    <option key={i} value={category}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="id">ID:</label>
                </div>
                <div className="col-sm-1">
                    <input type="number" name="id" className="form-control" onChange={onChangeHandler} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Search;