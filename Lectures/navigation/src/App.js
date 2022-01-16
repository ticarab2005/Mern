import { useState } from 'react';
import './App.css';

function App() {
  const [steps,setSteps] = useState([
    {direction:"left", text:"left at Oakley Ave"},
    {direction:"foward", text:"forward on North Ave."},
    {direction:"right", text:"right at Damen Ave."},
    {direction:"left", text:"left at Chicago Ave."},
    {direction:"left", text:"left at Wells St"},
    {direction:"left", text:"Left at W Institute Pl"},
  ])

  const [direction, setDirection] = useState("");
  const [text, setText] = useState("")

// const displayStep = (str,i) => {
//   return <li>{str}</li>
// }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("you have submitted!")
  }

  const newStep = {
    direction,
    text
  };

  setSteps([...steps, newStep]);

  return (
    <div className="App w-50 mx-auto">
      <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <div className="col">
            <select className='col'>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="forward">forward</option>
            </select>
          </div>
          <div className="col">
            <input type="text" placeholder='directions here...' className='form-control' onChange={(event) => {set.event.steps}}/>
            </div>
          {/* <option value=""></option>
          <option value=""></option>
          <option value=""></option> */}
        </div>
        <input type="submit" />
      </form>
      <ul>
          {
            steps.map(steps)
          }
      </ul>
    </div>
  );
}

export default App;
