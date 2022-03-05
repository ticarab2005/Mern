import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import New from './views/New';
import EditAuthor from './views/EditAuthor';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <div className="nav">
      <h1>Favorite authors</h1>
      </div>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/authors/new">
              <New />
            </Route>
            <Route exact path="/authors/:_id/edit">
              <EditAuthor />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
