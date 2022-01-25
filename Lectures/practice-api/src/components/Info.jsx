import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Info = () =>{
    // in order to use a parameter from the route, I need to use useParams
    const {category,id} = useParams();
    const [info, setInfo] = useState({});
    const [dataError, setDataError] = useState({})

    useEffect(()=>{
        // make an api call to starwars api to search the category with an id
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(res =>{
            console.log(res)
            setInfo(res.data)
        })
        .catch(err=>{
            console.log(err)
            setDataError({error:`🤖 These aren't the droids you are looking for! 🤖`})})
    },[category,id])

    return(
        <div>
            {   dataError.error ?
                <div>
                    <h1>{dataError.error} <img src="https://cdn.vox-cdn.com/thumbor/RrRiR78fhaENuTwBwVi3-NOBzhs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19609150/starwars3_movie_screencaps.com_14193.jpg" alt="Obi Wan Kenobi" /></h1>
                </div> :
                category==="people" ?
                <div>
                    <h1>Showing info about person number {id}</h1>
                    <h1>{info.name}</h1>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                </div> 
                : category==="planets" &&
                <div>
                <h1>{info.name}</h1>
                <p>Climate: {info.climate}</p>
                <p>Terrain: {info.terrain}</p>
                <p>Surface Water: {info.surface_water}</p>
                <p>Population: {info.population}</p>
            </div>
                // : dataError.error &&
                // <div>
                //     <h1>{dataError.error} <img src="https://cdn.vox-cdn.com/thumbor/RrRiR78fhaENuTwBwVi3-NOBzhs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19609150/starwars3_movie_screencaps.com_14193.jpg" alt="Obi Wan Kenobi" /></h1>
                // </div>

            }
        </div>
    )
}

export default Info;