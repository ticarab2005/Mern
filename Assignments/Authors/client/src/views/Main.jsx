import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/findAll")
            .then(res => {
                console.log(res);
                setAuthors(res.data.results)
            })
            .catch(err => console.log(err))
    }, [authors])

    const onDeleteHandler = (_id,index) => {
        console.log(_id)
        console.log(index)
            axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
                .then(res =>{
                    console.log(res);
                    history.push("/")
                })
                .catch(err =>{
                    console.log(err)
                    setAuthors("")
                })
    }

    return (
        <div className="mx-5">
            <Link to={"/authors/new"}>Add an author</Link>
            <h3 style={{ color: "indigo" }}>We have quotes by:</h3>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => {
                            return(
                            <tr key={i}>
                                <td className='fs-4' style={{ color: "indigo" }}>{author.name}</td>
                                <td>
                                    <Link to={`/authors/${author._id}/edit`} className="btn wide btn-warning mx-2">Edit</Link>
                                    <button onClick={() => onDeleteHandler(author._id)} className='btn btn-danger wide'>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Main;