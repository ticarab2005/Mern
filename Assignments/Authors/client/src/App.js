import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Favorite authors</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/authors/create">
          <Create/>
        </Route>
        <Route exact path="/authors/:_id/edit">
          <Edit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
