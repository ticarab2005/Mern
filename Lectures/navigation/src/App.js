import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Step from './compontents/Step';

function App() {


  const [steps,setSteps] = useState([
    // {direction:"left", text:"left at Oakley Ave"},
    // {direction:"foward", text:"forward on North Ave."},
    // {direction:"right", text:"right at Damen Ave."},
    // {direction:"left", text:"left at Chicago Ave."},
    // {direction:"left", text:"left at Wells St"},
    // {direction:"left", text:"Left at W Institute Pl"},
  ])

  const [direction, setDirection] = useState("left");
  const [text, setText] = useState("")

// const displayStep = (str) => {
//   return <li>{str}</li>
// }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("you have submitted!")
    const newStep = {
      direction,
      text
    };
  
    setSteps([...steps, newStep]);
  }

  const onDeleteHandler = (index) => {
    console.log(`trying to delete item #${index}`)
    // setSteps(steps.splice(index),1);
    // const newArray = [...steps];
    // newArray.splice(index,1);
    // newArray[index].text = "edited";
    const newArray = [
      ...steps.slice(0,index),
      
      ...steps.slice(index+1)
    ]
    setSteps(newArray);
  }

  return (
    <div className="App w-50 mx-auto">
      <form onSubmit={onSubmitHandler}>
        <div className='row mb-5'>
          <div className="col">
            <select className='form-select' onChange={(event) => {setDirection(event.target.value)}}>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="forward">forward</option>
            </select>
          </div>
          <div className="col">
            <input type="text" placeholder='directions here...' className='form-control' onChange={(event) => {setText(event.target.value)}}/>
            </div>
        </div>
        <input type="submit" className='btn btn-success mb-4'/>
      </form> 
        {
          steps.map((step,i) => {
            return <Step key={i} index={i} onDeleteHandler={onDeleteHandler} text={step.text} direction={step.direction}/>
          })
        }
          {/* {
            steps.map(steps)
          } */}
    </div>
  );
}

export default App;
