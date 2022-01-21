import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import NumWord from './views/NumWord';
import Color from './views/Color';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/:value">
          <NumWord/>
        </Route>
        <Route exact path="/:word/:color1/:color2">
          <Color/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
