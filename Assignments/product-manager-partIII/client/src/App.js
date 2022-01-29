import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Detail from './views/Detail';
import EditProduct from './components/EditProduct';
import Main from './components/Main';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
        <Main/>
          </Route>
          <Route exact path="/api/products/:_id">
            <Detail/>
          </Route>
          <Route exact path="/api/products/:_id/edit">
            <EditProduct/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
