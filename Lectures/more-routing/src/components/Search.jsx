import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push("/pokemon/" + name)
        // useHistory directs the user to a different URL without making a button to click
        // useHistory changes the route, it doesn't reload the component. It doesn't scrap the whole thing and load the component back up. It depends on UseEffect
        
    }
    
    return(
        <div className="w-50 mx-auto pt-4">
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="who's that pokemon??" onChange={(event => setName(event.target.value))} />
                <input type="submit" className="btn btn-lg btn-warning" />
                <br />
            </form>
        </div>
    )
}

export default Search;