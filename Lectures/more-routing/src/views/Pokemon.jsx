import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pokemon = (props) => {
    // {} is called distructuring. It's calling on the use params hook. It works with the rest of the browser router, route and switch. It sends over the whole object and destructure is
    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});
    // the first step to display information of the response is to set the state




    // useEffect takes in the dependency array. It puts variables in it and will watch those variables for changes. Whenever one of the variables changes, the code inside useEffect will run again
    // useEffect triggers on two occations: when the component loads up, right at the start and whenever something inside the dependency array changes. It is talking to the API
    useEffect(() => {
        // the axios call dictates what's inside of useState
        axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
            .then(res =>{
                console.log(res);
                setPokemon(res.data)
            })
            .catch(err=> console.log(err))
            // remember to fill in the array so the useHistory can update page
    },[name])

    return(
        <div className="w-50 mx-auto p-5">
            <h1>{name}</h1>
            {
                pokemon.sprites && 
                <img src={pokemon.sprites.front_default} alt={name}/>
            }
            <ul>
                <li>Types: </li>
                {/* <li>{pokemon.types[0].type.name}</li> */}
                {/* Pokemon.jsx:30 Uncaught TypeError: Cannot read properties of undefined (reading '0') means there's an empty value in your keys. Add a ternary to see if it exist */}
                {
                    pokemon.types &&
                    pokemon.types.map((obj,i) => {
                        return <li key={i}>{obj.type.name}</li>
                    })}
            </ul>
        </div>
    )
}

export default Pokemon;