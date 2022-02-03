import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const Edit = (props) => {
    const {_id} = useParams();
    const genres = ["adventure", "RPG", "shooter", "tabletop", "mmo", "puzzle", "horror", "platformer", "rougelike", "masochistic", "sandbox", "sports", "indie", "racing", "fighting", "simulation"];
    const [form, setForm] = useState({
        title: "",
        genre: genres[0],
        platform: "",
        imgUrl: "",
        releaseYear: null,
        player: null
    })
    const [errors, setErrors] = useState({});
    const history = useHistory();

    // to have the values prefill it, we're going to need an axios request to pull the information. 
    // lets add an useEffect
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${_id}`)
            .then(res=>{
                console.log(res.data.results)
                setForm(res.data.results)
            })
            .catch(err=>console.log(err))
    },[_id])
    // ⬆ since our useEffect is going to be using the id which is in the Url, we will want to add the id to the dependency array
    // it's harder to find the error if you don't include it. 

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/games/${_id}/update`, form)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                // shows all the data validations 
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })


    }

    return (
        <div>
            <h1 className="w-25 mx-auto" >Edit</h1>
            <form onSubmit={onSubmitHandler} className="w-50 mx-auto mt-5">
                <div className="format-group mb-2">
                    {/* changing the input will change the state */}
                    <input type="text" name="title" className="form-control" placeholder="title" value={form.title} onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <select name="genre" className="form-select mb-2" onChange={onChangeHandler}>
                    {
                        // doesn't neet to be a state because it's not changing. We defind it once, and that's it
                        genres.map((genre, i) => {
                            return <option value={genre} key={i}>{genre}</option>
                        })
                    }
                </select>
                <span className="alert-danger">{errors.genre && errors.genre.message}</span>

                <div className="format-group mb-2">
                    <input type="text" name="platform" className="form-control" placeholder="platform" onChange={onChangeHandler} value={form.platform}/>
                    <span className="alert-danger">{errors.platform && errors.platform.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="text" name="imgUrl" className="form-control" placeholder="imgUrl" onChange={onChangeHandler} value={form.imgUrl}/>
                    <span className="alert-danger">{errors.imgUrl && errors.imgUrl.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="releaseYear" className="form-control" placeholder="releaseYear" onChange={onChangeHandler} value={form.releaseYear}/>
                    <span className="alert-danger">{errors.releaseYear && errors.releaseYear.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="players" className="form-control" placeholder="players" onChange={onChangeHandler} value={form.players}/>
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="numLegs" className="form-control" placeholder="how many uhhhh......legs does this game has?" onChange={onChangeHandler} value={form.numLegs}/>
                </div>

                <input type="submit" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Edit;