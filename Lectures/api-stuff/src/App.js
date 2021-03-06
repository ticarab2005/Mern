import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("");
  // promise has 3 states: pending (come back later and check again), resolved(promise is done, move on to the next step), (rejected it's finished, but it failed)
  useEffect(() => {
    console.log("running use effect again")
    axios.get("https://api.openbrewerydb.org/breweries?by_city=" + city)
      .then(res => {
        console.log(res)
        //set state
        setBreweries(res.data)
      })
      .catch(err => console.log(err))
    }, [city])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // fetch("https://api.openbrewerydb.org/breweries?by_city="+city)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //     //set state
    //     setBreweries(res);
    //   })
    //   .catch(err => console.log(err))
    axios.get("https://api.openbrewerydb.org/breweries?by_city=" + city)
      .then(res => {
        console.log(res)
        //set state
        setBreweries(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>search for breweries!</h1>
      <form onSubmit={onSubmitHandler}>
        {/* <input type="text" onChange={(event)=> setCity(event.target.value)} /> */}
        <select onChange={(event) => setCity(event.target.value)}>
          <option value="cleveland">cleveland</option>
          <option value="chicago">chicago</option>
          <option value="nashville">nashville</option>
          <option value="boston">boston</option>
          <option value="canton">canton</option>
        </select>
        {/* <button className='btn btn-success btn-lg'>click me!</button> */}
      </form>
      <ul>
        {
          breweries.map((brewery, i) => {//use arrow function
            return <li key={i}><a href={brewery.website_url}>{brewery.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
