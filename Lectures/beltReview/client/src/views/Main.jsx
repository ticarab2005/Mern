import React, { useEffect,useState } from "react";
import axios from "axios";
import GameBox from "../components/GameBox";

const Main = (props) => {
    // you have to make this an array. You're going to map out on this component.
    // if you don't make it an empty array, then that means when the page loads up, it's goint to try to map out something that isn't an array, and it won't work
    // arrays can be map, nothing else can be mapped
    const[games,setGames] = useState([]);
    // ⬆⬆ we don't have to bring in all the information in the different state, because this array will bring everything that's in the database ⬆⬆

    useEffect(()=>{
        axios.get("http://localhost:8000/api/games/findAll")
            .then(res=>{
                console.log(res.data.results);
                // make sure you set your state here
                setGames(res.data.results);
            })
            .catch(err=>console.log(err))
    },[])

    const onLikeHandler = (_id, arrIndex) => {
        console.log(_id);
        console.log(arrIndex);

        axios.patch(`http://localhost:8000/api/games/${_id}/upvote`)
            .then(res=>{
                console.log(res);
                const copyGames = [...games];
                copyGames[arrIndex].score++;
                copyGames.sort((a,b) => b.score - a.score)
                setGames(copyGames);
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className="w-75 mx-auto">
            {
                // item is a full object
                // we are mapping out a component for each of our games
                // we put it inside of a component to make it easier so the file isn't big
                games.map((item,i)=>{
                    return <GameBox key={i} game={item} onLikeHandler={()=>onLikeHandler(item._id,i)}/>
                })
            }
        </div>
    )
}

export default Main;