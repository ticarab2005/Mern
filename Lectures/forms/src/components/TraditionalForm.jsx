import React, {useState} from "react";

const TraditionalForm = (props) => {

    const[flavor, setFlavor] = useState("");
    const[sauce, setSauce] = useState("");
    const[topping, setTopping] = useState("");
    const[fruit, setFruit] = useState("");
    const[whipped, setWhipped] = useState(false);
    const[dairyFree, setDairyFree] = useState(false);

    return (
        <div className="w-25 mx-auto">
            <h1>Make a Sundae</h1>
            <form>{/* topping, flavor, sauce, size, fruit, whipped cream + cherry(?), dairy-free*/}
            <div className="form-group">
                <label htmlFor="flavor">Flavor</label>
                <input className="form-control" name="flavor" type="text" onChange={(event)=>{setFlavor(event.target.value)}}/>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="sauce">Sauce</label>
                <input className="form-control" name="sauce" type="text" onChange={(event)=>{setSauce(event.target.value)}}/>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="topping">Topping</label>
                <input className="form-control" name="topping" type="text" onChange={(event)=>{setTopping(event.target.value)}}/>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="fruit">Fruit</label>
                <input className="form-control" name="fruit" type="text" onChange={(event)=>{setFruit(event.target.value)}}/>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="whipped">Whipped Cream and Cherry?</label>
                <input className="form-check-input" name="whipped" type="checkbox" onChange={(event)=>{setWhipped(event.target.checked)}}/>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="dairy-free">Dairy free?</label>
                <input className="form-check-input" name="dairy-free" type="checkbox" onChange={(event)=>{setDairyFree(event.target.checked)}}/>
            </div>
            <br />
            <input type="submit" className="btn btn-lg btn-success" />
                </form>
        </div>
    )
}

export default TraditionalForm;

