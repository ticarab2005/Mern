import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const bestCharacter = "Hero"
  const bgStyle = {
    width: "50%",
    height: "200px",
    backgroundColor: "palevioletred",
    margin: "0px auto"
  }

  const clickMe = () => {
    console.log("clicked!!!")
  }

  return (
    <div className="App">
      <h1>Hey it's me!</h1>
      <marquee onClick={()=>{alert("marquees are the best!!!!")}}><h1>weeeeeeeeeeeeeeeeeeeeeeeee!!!</h1></marquee>
      <h1>8 + 6</h1>
      <h1>{8 + 6}</h1>
      <h1 style={bgStyle} onClick={clickMe()}>The best character in smash ultimate is {bestCharacter}</h1>

      <input type="text" />

    </div>
  );
}

export default App;
