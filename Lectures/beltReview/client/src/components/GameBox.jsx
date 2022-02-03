import React from "react";
import { Link } from 'react-router-dom'

const GameBox = (props) => {
    return (
        <div className="gameBox">
            <img src={props.game.imgUrl} alt={props.game.title} />
            <h1><button className="btn btn-warning" onClick={props.onLikeHandler}>👍 {props.game.score}</button></h1>
            <h3>{props.game.title}</h3>
            <ul>
                <li>genre:{props.game.genre}</li>
                <li>platform: {props.game.platform}</li>
                <li>release year: {props.game.releaseYear}</li>
                <li>players: {props.game.players}</li>
                <li>numLegs: {props.game.numLegs}</li>
                <li><Link to={`/games/${props.game._id}/edit`}>Edit</Link></li>
            </ul>
        </div>
    )
}

export default GameBox;