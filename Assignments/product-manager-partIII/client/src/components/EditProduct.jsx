import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useHistory } from 'react-router-dom';


const EditProduct = (prop) => {
    const {_id} = useParams();
    const history = useHistory();
    const [products, setProducts] = useState([])

    const onChangeHandler = (event) => {
        setProducts({
            ...products,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(products)

        axios.patch(`http://localhost:8000/api/products/${_id}/update`, products)
            .then(res => {
                console.log(res);
                history.push("/")
                setProducts([...products, res.data.results])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div className="app w-25 mt-5 mx-auto">
            <h1>Edit Product</h1> 
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input className="form-control" name="title" type="text" value={products.title} onChange={onChangeHandler} />
                </div>
                <br />
                <div>
                    <label htmlFor="price">Price: </label>
                    <input className="form-control" type="number" value={products.price} name="price" onChange={onChangeHandler} />
                </div>
                <br />
                <div>
                    <label htmlFor="description">Description: </label>
                    <input className="form-control" type="text" value={products.description} name="description" onChange={onChangeHandler} />
                </div>
                <br />
                <input type="submit" value="Update Product" className="btn btn-lg btn-success" />
            </form>
        </div>
    )
}

export default EditProduct;