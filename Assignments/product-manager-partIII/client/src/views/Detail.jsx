import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Detail = (props) => {
    const {_id } = useParams();
    const history = useHistory();
    const [results, setResults] = useState([]);

    const onDeleteHandler = (_id,index) => {
        console.log(_id)
        console.log(index)
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
                .then(res =>{
                    console.log(res);
                    history.push("/")
                })
                .catch(err =>{
                    console.log(err)
                    setResults("")
                })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+_id)
            .then(res => {
                console.log(res);
                setResults(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div className="w-50 mx-auto p-5">
            <h1>{results.title} <button onClick={()=> onDeleteHandler(results._id)} className="btn btn-sm btn-danger">x</button></h1>
            <p>Price: ${results.price}</p>
            <p>Description: {results.description}</p>
        </div>
    )
}

export default Detail;