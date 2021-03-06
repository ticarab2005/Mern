import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Main = (prop) => {
    const {_id} = useParams();
    const [products, setProducts] = useState([])
    const [form, setForm] = useState({
        title: "",
        price: null,
        deascription: ""
    })
    const [errors,setErrors] = useState({});

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
                setProducts([...products, res.data.results])
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    const onDeleteHandler = (_id,index,title) => {
        if(window.confirm(`are you sure you want to delete product ${title}?`)){
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
                .then(res =>{
                    console.log(res);
                    const copyProduct = [...products];
                    copyProduct.splice(index,1);
                    setProducts(copyProduct);
                })
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/findAll`)
            .then(res => {
                console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div className="app w-25 mt-5 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input className="form-control" name="title" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="price">Price: </label>
                    <input className="form-control" type="number" name="price" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.price && errors.price.message}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="description">Description: </label>
                    <input className="form-control" type="text" name="description" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>
                <br />
                <input type="submit" className="btn btn-lg btn-success" />
            </form>
            <ul>
            <h1 className='mt-3'>All Products:</h1>
                {
                    products.map((item, i) => {
                        return <div key={i}>
                            <Link to={`/api/products/${item._id}`}>{item.title}</Link> <Link className='link-secondary' to={`/api/products/${item._id}/edit`}>Edit</Link> <button onClick={()=> onDeleteHandler(item._id,i,item.title)} className="btn btn-sm btn-danger">x</button>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Main;