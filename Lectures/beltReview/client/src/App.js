import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import SingleGame from './views/SingleGame';

function App() {
  return (
    <div className="App">
        <div className="nav">
          <Link className='btn btn-info' to="/">Main Page</Link>
          <Link className='btn btn-warning' to="/games/create">Add New Game</Link>
        </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/games/create">
          <Create/>
        </Route>
        <Route exact path="/games/:_id/edit">
          <Edit/>
        </Route>
        <Route exact path="/games/:_id">
          <SingleGame/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
