import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Categories = () => {
    const { id, category } = useParams();
    const [select, setSelect] = useState({});
    const [dataErr, setDataErr] = useState({});


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                console.log(res);
                setSelect(res.data)
            })
            .catch(err => {
                console.log(err)
                setDataErr({ error: `🤖 Beep bop, these aren't the droids you are looking for (╯▔皿▔)╯ 🤖` })
            })
    }, [category, id, dataErr])

    return (
        <div>
            <ul>
                {
                    dataErr.error ?
                        <div>
                            <h1>{dataErr.error}
                                <img style={{ height: 750 }} className="rounded float-left pic mt-4" src="https://i.kym-cdn.com/entries/icons/facebook/000/023/967/obiwan.jpg" alt="Obi Wan Kenobi" /></h1>
                        </div>
                        : category === "people" ?
                            <div>
                                <h1>{select.name}</h1>
                                <p><span className="fw-bold">Height: </span>{select.height}</p>
                                <p><span className="fw-bold">Mass: </span>{select.mass}</p>
                                <p><span className="fw-bold">Hair Color: </span>{select.hair_color}</p>
                                <p><span className="fw-bold">Skin Color: </span>{select.skin_color}</p>
                            </div>
                            : category === "planets" ?
                                <div>
                                    <h1>{select.name}</h1>
                                    <p><span className="fw-bold">Climate: </span>{select.climate}</p>
                                    <p><span className="fw-bold">Terrain: </span>{select.terrain}</p>
                                    <p><span className="fw-bold">Surface Water: </span>{select.surface_water}</p>
                                    <p><span className="fw-bold">Population: </span>{select.population}</p>
                                </div>
                                : category === "films" ?
                                    <div>
                                        <h1>{select.title}</h1>
                                        <p><span className="fw-bold">Episode: </span>{select.episode_id}</p>
                                        <p><span className="fw-bold">Director: </span>{select.director}</p>
                                        <p><span className="fw-bold">Producer: </span>{select.producer}</p>
                                        <p><span className="fw-bold">Release Date: </span>{select.release_date}</p>
                                    </div>
                                    : category === "species" ?
                                        <div>
                                            <h1>{select.name}</h1>
                                            <p><span className="fw-bold">Classification: </span>{select.classification}</p>
                                            <p><span className="fw-bold">Designation: </span>{select.designation}</p>
                                            <p><span className="fw-bold">Average Height: </span>{select.average_height}</p>
                                            <p><span className="fw-bold">Average Lifespan: </span>{select.average_lifespan}</p>
                                        </div>
                                        : category === "vehicles" ?
                                            <div>
                                                <h1>{select.name}</h1>
                                                <p><span className="fw-bold">Model: </span>{select.model}</p>
                                                <p><span className="fw-bold">Cost in Credits: </span>{select.cost_in_credits}</p>
                                                <p><span className="fw-bold">Passenger Count: </span>{select.passengers}</p>
                                                <p><span className="fw-bold">Vehicle Class: </span>{select.vehicle_class}</p>
                                            </div>
                                            : category === "starships" &&
                                            <div>
                                                <h1>{select.name}</h1>
                                                <p><span className="fw-bold">Model: </span>{select.model}</p>
                                                <p><span className="fw-bold">Cost in Credits: </span>{select.cost_in_credits}</p>
                                                <p><span className="fw-bold">Crew Count: </span>{select.crew}</p>
                                                <p><span className="fw-bold">Hyperdrive Rating: </span>{select.hyperdrive_rating}</p>
                                            </div>
                }
            </ul>
        </div>
    )
}

export default Categories;