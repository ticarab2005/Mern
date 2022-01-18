import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Box from './components/Box';
import BoxGenerator from './components/BoxGenerator';
import React, {useState} from 'react';

function App() {

    const [generator, newGenerator] = useState([])

    const newColorBox = (newColor) => {

      const createNewBox = [...generator];
      createNewBox.push(newColor)
      newGenerator(createNewBox);
    }
  
  return (
    <div className="App">
      <Box onNewColor={newColorBox}/>
      <BoxGenerator createColorBox={generator}/>
    </div>
  );
}

export default App;
