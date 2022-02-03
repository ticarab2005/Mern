import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Edit = (props) => {
    const crewPositions = ["First Mate", "Quarter Master", "Boatswain", "Powder Monkey", "Gunner", "Sailing Master", "Cooks", "Surgeon", "Captain"];
    const [form, setForm] = useState({
        name: "",
        imgUrl: "",
        tresureChest: 1,
        crewPosition: crewPositions[0],
        pirateCatchPhrase: "",
        pegLeg: false,
        eyePatch: false,
        hookHand: false
    })
    
    // const [checkbox, setCheckbox] = useState([
    //     { id: 1, value: "pegLeg", isCheched: false },
    //     { id: 2, value: "eyePatch", isCheched: false },
    //     { id: 3, value: "hookHand", isCheched: false }
    // ])

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        axios.post("http://localhost:8000/api/pirates/create",form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div className="w-50 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className="row g-2 d-flex bd-highlight">
                    <div className="col-md p-2 w-100 bd-highlight">
                        <div className="form-group">
                            <label htmlFor="name">Pirate Name:</label>
                            <input type="text" className="form-control" name="name" onChange={onChangeHandler}/>
                            <span className="alert-danger">{errors.name && errors.name.message}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="treasureChest"># of Treasure Chest:</label>
                            <input type="number" className="form-control" name="treasureChest" onChange={onChangeHandler}/>
                            <span className="alert-danger">{errors.treasureChest && errors.treasureChest.message}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imgUrl">Image Url:</label>
                            <input type="text" className="form-control" name="imgUrl" onChange={onChangeHandler}/>
                            <span className="alert-danger">{errors.imgUrl && errors.imgUrl.message}</span>
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="pirateCatchPhrase">Pirate Catch Phrase: </label>
                                <textarea className="form-control" name="pirateCatchPhrase" cols="30" rows="3" onChange={onChangeHandler}></textarea>
                                <span className="alert-danger">{errors.pirateCatchPhrase && errors.pirateCatchPhrase.message}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md p-2 w-100 bd-highlight">
                        <div className="form-group">
                            <label htmlFor="crewPosition">Crew Position: </label>
                            <select name="crewPosition" className="form-select mb-5" onChange={onChangeHandler}>
                                {
                                    // doesn't neet to be a state because it's not changing. We defind it once, and that's it
                                    crewPositions.map((crewPosition, i) => {
                                        return <option value={crewPosition} key={i}>{crewPosition}</option>
                                    })
                                }
                            </select>
                            <br />
                            <br />
                            <div className="form-group">
                                <label htmlFor="pegLeg">Peg Leg:</label>
                                <input type="checkbox" name="pegLeg" onChange={onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eyePatch">Eye Patch:</label>
                                <input type="checkbox" name="eyePatch" onChange={onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hookHand">Hook Hand</label>
                                <input type="checkbox" name="hookHand" onChange={onChangeHandler} />
                            </div>
                        </div>
                        <br />
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit;