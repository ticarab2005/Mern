import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import Articles from './components/Articles';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/users/register">
          <RegistrationForm/>
        </Route>
        <Route exact path="/">
          <SignIn/>
        </Route>
        <Route>
          <Dashboard exact path="/api/users/dashboard"/>
        </Route>
        <Route>
          <Articles/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
