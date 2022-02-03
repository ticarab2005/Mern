import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = (props) =>{
    return(
        <div className="d-flex bd-highlight arg">
            <img src={props.pirate.imgUrl} alt={props.pirate.name} />
            <div className="p-2 w-100 bd-highlight">
                <p>{props.pirate.name}</p>
            </div>
            <div className="p-2 flex-shrink-1 bd-highlight">
                <Link className="btn btn-success" to={`/pirates/${props.pirate._id}`}>View Pirate</Link>
            </div>
                <button className="btn btn-danger fs-8 mx-5" onClick={props.onDeleteHandler}>Walk the Plank</button>
        </div>
    )
}

export default Dashboard;