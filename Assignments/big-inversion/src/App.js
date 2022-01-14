import './App.css';
import BigInversion from './components/BigInversion';

function App() {
  return (
    <div className="App">
      <BigInversion 
        firstName = {"Jane"}
        lastName = {"Doe"}
        age ={45}
        hairColor = {"Black"} ></BigInversion>
      <BigInversion 
        firstName = {"John"}
        lastName = {"Smith"}
        age ={88}
        hairColor = {"Brown"} ></BigInversion>
      <BigInversion 
        firstName = {"Millard"}
        lastName = {"Fillmore"}
        age ={50}
        hairColor = {"Brown"} ></BigInversion>
      <BigInversion 
        firstName = {"Maria"}
        lastName = {"Smith"}
        age ={62}
        hairColor = {"Brown"} ></BigInversion>
    </div>
  );
}

export default App;
