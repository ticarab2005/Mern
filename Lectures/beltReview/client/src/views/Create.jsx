import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Create = (props) => {
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

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/games/create/", form)
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
            <h1 className="mx-auto" >Add game to list</h1>
            <form onSubmit={onSubmitHandler} className="w-50 mx-auto mt-5">
                <div className="format-group mb-2">
                    <input type="text" name="title" className="form-control" placeholder="title" onChange={onChangeHandler} />
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
                    <input type="text" name="platform" className="form-control" placeholder="platform" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.platform && errors.platform.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="text" name="imgUrl" className="form-control" placeholder="imgUrl" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.imgUrl && errors.imgUrl.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="releaseYear" className="form-control" placeholder="releaseYear" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.releaseYear && errors.releaseYear.message}</span>
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="players" className="form-control" placeholder="players" onChange={onChangeHandler} />
                </div>

                <div className="format-group mb-2">
                    <input type="number" name="numLegs" className="form-control" placeholder="how many uhhhh......legs does this game has?" onChange={onChangeHandler} />
                </div>

                <input type="submit" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Create;