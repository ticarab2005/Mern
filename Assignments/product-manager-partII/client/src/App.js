import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ProductResults from './views/ProductResults';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
        <ProductForm/>
          </Route>
          <Route exact path="/api/products/:_id">
            <ProductResults/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
