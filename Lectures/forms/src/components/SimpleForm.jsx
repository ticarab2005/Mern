import React, { useState } from 'react';

const SimpleForm = (props) => {

    const [form, setForm] = useState({
        flavor: "",
        sauce: "",
        topping: "",
        fruit: "",
        whipped: false,
        dairyFree: false
    });

    const onChangeHandler = (eve) => {
        setForm({
            ...form,
            [eve.target.name]: eve.target.type === "checkbox" ? eve.target.checked: eve.target.value
        })
    }

    return (
        <div className="w-25 mx-auto">
            <h1>Make a Sundae - Simple Form</h1>
            <form>{/* topping, flavor, sauce, size, fruit, whipped cream + cherry(?), dairy-free*/}
                <div className="form-group">
                    <label htmlFor="flavor">Flavor</label>
                    <input className="form-control" name="flavor" type="text" onChange={onChangeHandler} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="sauce">Sauce</label>
                    <input className="form-control" name="sauce" type="text" onChange={onChangeHandler}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="topping">Topping</label>
                    <input className="form-control" name="topping" type="text" onChange={onChangeHandler}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="fruit">Fruit</label>
                    <input className="form-control" name="fruit" type="text" onChange={onChangeHandler}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="whipped">Whipped Cream and Cherry?</label>
                    <input className="form-check-input" name="whipped" type="checkbox" onChange={onChangeHandler}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="dairy-free">Dairy free?</label>
                    <input className="form-check-input" name="dairy-free" type="checkbox" onChange={onChangeHandler}/>
                </div>
                <br />
                <input type="submit" className="btn btn-lg btn-success" onChange={onChangeHandler}/>
            </form>
        </div>
    )
}

export default SimpleForm;