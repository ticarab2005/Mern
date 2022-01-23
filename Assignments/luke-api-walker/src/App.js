import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './components/Search';
import Categories from './views/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        <Switch>
          <Route exact path="/:category/:id">
            <Categories />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
