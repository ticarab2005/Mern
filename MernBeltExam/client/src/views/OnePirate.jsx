import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OnePirate = props => {
    const { _id } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
            .then(res => {
                console.log(res);
                setResults(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div>
            <h1>{results.name}</h1>

            <div className="p-2 w-100 bd-highlight">
                <img src={results.imgUrl} alt={results.name} />
                <p>{results.pirateCatchPhrase}</p>
            </div>
            <div className="p-2 flex-shrink-1 bd-highlight">
                <h2>About</h2>
                <ul>
                    <li>Position: {results.crewPosition}</li>
                    <li>Treasures: {results.treasureChest}</li>
                    <li>Peg Leg: {results.pegLeg ? "yes" : "no"}</li>
                    <li>Eye Patch: {results.eyePatch ? "yes" : "no"}</li>
                    <li>Hook Hands: {results.hookHand ? "yes" : "no"}</li>
                </ul>
            </div>
        </div>
    )
}

export default OnePirate;