import React from "react";
import MyNewComponent from './components/MyNewComponents';

function App() {
  const mLeft = {
    margin: "25px",
  }
  return (
    <div style={mLeft} className="App">
      <MyNewComponent/>
    </div>
  );
}

export default App;
