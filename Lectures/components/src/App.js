import './App.css';
import Box from './components/Box';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <Box text="hey it's me!" dark={true}/>
      <Box text="hey it's you!"dark={false}/>
      <Box text="yaha it's a me!"dark={true}/>
      <Box text="tevo"dark={false}/>
      <Box text="hamborgur"dark={true}/>
      <Box text="hemburrrgggrrr"dark={true}/>
        <h1>Heyyyyyy there</h1>
      <Box/>
    </div>
  );
}

export default App;
