import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        console.log(res)
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App w-25 mx-auto">
      <h1>Gotta catch em all!!!</h1>
      <button onClick={onClickHandler} className='btn btn-success btn-lg'>Fetch Pokemon</button>
      <br /><br />
      <ul>
        {
          pokemon.map((allPokemon, i) => {
            return <li className='fs-4' key={i}>{allPokemon.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
