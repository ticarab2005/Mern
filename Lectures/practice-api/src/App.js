import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './components/Search';
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Luke Api Walker</h1>
          <Search/>
      <Switch>
        {/* <Route exact path="/">
        </Route> */}
        <Route exact path="/:category/:id">
          <Info/>
        </Route>
      </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
