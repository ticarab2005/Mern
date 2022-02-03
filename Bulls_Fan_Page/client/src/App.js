import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link className='btn btn-info' to="/">Main Page</Link>
        <Link className='btn btn-warning' to="/games/create">Add New Game</Link>
      </div>
    </div>
  );
}

export default App;
