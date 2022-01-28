import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductResults = (props) => {
    const { _id } = useParams();
    const [results, setResults] = useState({});

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
            <h1>{results.title}</h1>
            <p>Price: ${results.price}</p>
            <p>Description: {results.description}</p>
        </div>
    )
}

export default ProductResults;