import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Create from './views/Create';
import ShowPirates from './views/ShowPirates';
import OnePirate from './views/OnePirate';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/pirates/create">
          <Create/>
        </Route>
        <Route exact path="/pirates/:_id">
          <OnePirate/>
        </Route>
        <Route exact path="/pirates/">
          <ShowPirates/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
