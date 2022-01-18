import React, {useState} from "react";

const List = () => {
    const [task, setTask] = useState({
        taskName: "",
        isComplete: false
    });

    const[list, setList] = useState([])
    
    const onChangeHandler = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("clickety click")
        setList([...list,task])
        setTask({            
            taskName:"",
            isComplete:false
        })
    }

    const completeTask = (event,i) => {
        // console.log("done with task index -->",i)
        let[...updatedList] = list
        // console.log("updated looks like -->",updatedList)
        updatedList[i].isComplete = !updatedList[i].isComplete

        setList(updatedList)
    }
    

    const onDeleteHandler = (event,i) => {
        let newlist = list.filter((task,idx) => {
            return idx !== i
        });
        setList(newlist)
    }


    return (
        <div className="App w-25 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mb-2">
                    <label htmlFor="">Task</label>
                    <input type="text" placeholder="list task..." name="taskName" onChange={onChangeHandler} value={task.taskName} className="form-control"/>
                </div>
                <input type="submit" className="btn btn-success" value='Add'/>
            </form>
            {
                list.map((task, i) => {
                    return( 
                    <div key={i}>
                        <h3 style={{textDecoration: task.isComplete ? "line-through" : ""}}>{task.taskName} <input onClick={(event) =>completeTask(event,i)} type="checkbox" name="" id="" /></h3>
                        <button onClick={(event) => onDeleteHandler(event,i)} className="btn btn-danger">Delete</button>
                    </div>
                )})
            }
        </div>
    )
}

export default List;
