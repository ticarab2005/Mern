import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorName from "../components/AuthorName";
import { Link } from "react-router-dom";

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/findAll")
            .then(res => {
                console.log(res.data.results)
                setAuthors(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="mx-auto">
            <Link to={"/authors/create"}>Add an author</Link>
            <h3 className="mb-3">We have quotes by:</h3>
            <div className="d-flex justify-content-around">
                <p>Authors</p>
                <p>Actions Available</p>
            </div>
            {
                authors.map((item, i) => {
                    return <AuthorName key={i} author={item} />
                })
            }
        </div>
    )
}

export default Main;