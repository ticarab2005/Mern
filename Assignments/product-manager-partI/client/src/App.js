import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductForm from './component/ProductForm';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <ProductForm/>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
