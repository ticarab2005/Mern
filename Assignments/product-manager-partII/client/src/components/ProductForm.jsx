import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const ProductForm = (prop) => {
    const {_id} = useParams();
    const history = useHistory();
    const [products, setProducts] = useState([])
    const [form, setForm] = useState({
        title: "",
        price: null,
        deascription: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(form)

        axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                console.log(res);
                history.push(`/products/${_id}`)
                // setProducts([...products, res.data.results])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        // axios.get(`http://localhost:8000/api/products/${_id}`)
        axios.get(`http://localhost:8000/api/products/findAll`)
            .then(res => {
                console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id,form])

    return (
        <div className="app w-25 mt-5 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input className="form-control" name="title" type="text" onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{form.firstName.length < 2 && form.firstName.length > 0 && "First Name must be at least 2 character"}</span> */}
                </div>
                <br />
                <div>
                    <label htmlFor="price">Price: </label>
                    <input className="form-control" type="number" name="price" onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{form.lastName.length < 2 && form.lastName.length > 0 && "Last Name must be at least 2 character"}</span> */}
                </div>
                <br />
                <div>
                    <label htmlFor="description">Description: </label>
                    <input className="form-control" type="text" name="description" onChange={onChangeHandler} />
                    {/* <span className="alert-danger">{form.email.length < 5 && form.email.length > 0 && "Email must be at least 5 character"}</span> */}
                </div>
                <br />
                <input type="submit" className="btn btn-lg btn-success" />
            </form>
            <ul>
            <h1 className='mt-3'>All Products:</h1>
                {
                    products.map((item, i) => {
                        return <div>
                            <Link to={`/api/products/${item._id}`} key={i}>{item.title}</Link>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductForm;