import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Pokemon from './views/Pokemon';
import Home from './views/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/pokemon/:name">
          {/* colon : is a routing peramater that's a variable*/}
          <Pokemon/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
