import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
    // useHistory is so we can do redirects to a new route when the form is submitted
    const history = useHistory();
    const [categories, setCategories] = useState([])

    //making an array can extract from this object and put all the keys into the array
    const [form, setForm] = useState({
        //this is to collect info from the form
        //this object will have keys that match the names of the inputs of the form I wan to collect info from
        id: "",
        category: "people"

    });

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(res => {
                console.log("logging response-->", res.data)
                let result = Object.keys(res.data)//result is an array containing all the categories
                console.log("RESULTS IS THIS-->", result)
                setCategories(result)
            })
            .catch(err => console.log(err));
        
    }, []) // don't forget the dependency array

    // this is a change handler that will run each time the form input info change, it will help to update the state variable form to represent what's in the form

    const onChangeHandler = (event) => {
        console.log("changeing inputs")
        // update the state variable containing the form with the values from the inputs
        // we're trying to update an object
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${form.category}/${form.id}/`)
        console.log("submitted with this info", form)
        // make an api call to the starwars api with the info collected from the form-> AXIOS IS WHAT YOU USE TO MAKE AN API CALL!!!
        // the name of the variable that contains the form information is form. 
        // in order to put a variable inside of a string, you must use backticks(``), then use ${}
        axios.get(`https://swapi.dev/api/${form.category}/${form.id}`)
            .then(res => {
                console.log("response from api after submitting form-->", res)
                
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} className="d-flex">
                <div className="form-group">
                    <label htmlFor="">Search For</label>
                    <select onChange={onChangeHandler} className="form-control" name="category" id="">
                        {/* using curly braces, we need to loop through the array. Anytime you want to do something for each item in the array, you need to map through the array*/}
                        {
                            // .map means that you want to do a certain method for each item in the array that I'm mapping through.
                            // in the params, the first word represents each item inside of your array(list), the second word is the index of each item
                            categories.map((category, i) => {
                                return (
                                    <option key={i} value={category}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input onChange={onChangeHandler} className="form-control" type="number" name="id" id="" />
                </div>
                <input type="submit" value="Search" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Search;