import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TraditionalForm from './components/TraditionalForm';
import SimpleForm from './components/SimpleForm';
import {useState} from 'react';

function App() {
    const [words,setWords] = useState(["hash browns","home fries","taters wedges","yucca","scalloped potatoes"])
      return(
        <div className="App">
      {/* <TraditionalForm/> */}
      {/* <SimpleForm/> */}
      {
        words.map((str) => {
          return <marquee><h1>{str} are delish!</h1></marquee>
        })
      }
    </div>
  );
}

export default App;
