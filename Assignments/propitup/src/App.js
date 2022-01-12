import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        personName = {"Doe, Jane"}
        age ={45}
        hairColor = {"Black"} ></PersonCard>
      <PersonCard 
        personName = {"Smith, John"}
        age ={88}
        hairColor = {"Brown"} ></PersonCard>
      <PersonCard 
        personName = {"Fillmore, Millard"}
        age ={50}
        hairColor = {"Brown"} ></PersonCard>
      <PersonCard 
        personName = {"Smith, Maria"}
        age ={62}
        hairColor = {"Brown"} ></PersonCard>
    </div>
  );
}

export default App;
