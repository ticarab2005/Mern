import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassCounter from './compontents/ClassCounter';
import FunctionalCounter from './compontents/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <h1>Hey it's me!</h1>
      <ClassCounter start={10}/>
      <ClassCounter start={100}/>
      <FunctionalCounter start = {1000}/>
    </div>
  );
}

export default App;
