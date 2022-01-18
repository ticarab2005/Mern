import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import List from './components/List';

function App() {
  
  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
        <List/>
        </div>
    </div>
  );
}

export default App;
