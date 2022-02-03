import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Dashboard from "../components/Dashboard";

const ShowPirates = (props) => {
    const history = useHistory();
    const [pirates, setPirates] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/findAll`)
            .then(res => {
                console.log(res);
                setPirates(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const onDeleteHandler = (_id,index) => {
        console.log(_id)
        console.log(index)
            axios.delete(`http://localhost:8000/api/pirates/${_id}/delete`)
                .then(res =>{
                    console.log(res);
                    history.push("/pirates/")
                })
                .catch(err =>{
                    console.log(err)
                    setPirates("")
                })
    }

    return (
        <div className="w-75">
            <div className="d-flex justify-content-around mb-4 nav">
            <h1>Pirate Crew</h1>
            <Link className='btn btn-warning mx-5' to="/pirates/create">Add New Pirate</Link>
            </div>
            {
            pirates.map((item,i)=>{
                return <Dashboard key={i} pirate={item} onDeleteHandler={()=>onDeleteHandler(item._id,i)}/>
            })
        }
        </div>
    )
}

export default ShowPirates;