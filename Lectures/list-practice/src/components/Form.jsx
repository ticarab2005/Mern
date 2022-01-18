import React, { useState } from "react";

const Form = () => {

    const [task, setTask] = useState({
        //represent each task as an object
        nameOfTask: "",
        isComplete: false
    });

    // represents the list containing all the task objects

    const [listOfTask, setListOfTask] = useState([]) //array of objects

    // When the input in the form changes, we need to update our state variable (task)'s name to be what is in the input
    const changeHandler = (event) => {
        console.log("I'm gonna make a change")
        setTask({
            ...task, //make a copy of what's currently in task
            [event.target.name]: event.target.value
        });
    }

    // when we submit the form, we will add the task object to our list(array) of tasks. below is the submit handler called submit task
    const submitTask = (event) => {
        event.preventDefault()
        console.log("submitting task")
        setListOfTask([...listOfTask, task]) //update the list of tasks to have whatever it currently has plus the current task object that just got submitted

        // clear out the form inputs first reset the state variable form info to initial value like below
        // second update the value of the input to match the state variable

        // complete a task
        setTask({
            nameOfTask: "",
            isComplete: false
        });
    }


    const completeTask = (event,i) => {
        console.log("done with the task at index number -->", i)
        // update the task object that was clicked on(extra callback perameter)
        let [...updatedListofTask] = listOfTask
        console.log("update list looks like -->",updatedListofTask)
        updatedListofTask[i].isComplete = !updatedListofTask[i].isComplete //change the array of task at the index number where the task we want to update is to have the "isComplete" property toggle to true and false

        setListOfTask(updatedListofTask) //update my state variable to use the new updated array of tasks
    }

    const deleteTask = (event,idx) => {
        let newlist = listOfTask.filter((task,i)=>{
            return i != idx //return back only the task whose index number does not match the index number of the task I want to delete
        })
        // update my state variable listOfTasks
        setListOfTask(newlist)
    }

    return (
        <div>
            <h4>Add a task below</h4>
            <form onSubmit={submitTask}>
                <div className="form-group">
                    <label htmlFor="">Task:</label>
                    <input type="text" onChange={changeHandler} name="nameOfTask" value={task.nameOfTask} id="" className="form-control" />
                </div>
                <input type="submit" value="Add Task" className="btn btn-success mt-3" />
            </form>
            {// callback function that's giving us an input to another function
                listOfTask.map((taskObj,i)=>{
                    return (
                        <div key={i}>
                            <h3 style={{textDecoration: taskObj.isComplete ? "line-through":""}}>{taskObj.nameOfTask} <input onClick={(event)=>completeTask(event,i)} type="checkbox" name="" id="" /></h3>
                            <button onClick={(event) => deleteTask(event,i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Form;