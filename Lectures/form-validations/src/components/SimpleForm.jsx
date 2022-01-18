import React, { useState } from 'react';

const SimpleForm = (props) => {

    const [form, setForm] = useState({
        flavor: "",
        sauce: "",
        toppings: "",
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

    const lengthValidator = (input) => {
        if(input.length > 2){
            return true;
        } else{
            return false;
        }
    }

    const allValid=(inputs) => {
        return lengthValidator(inputs.flavor)
            && lengthValidator(inputs.sauce)
            && lengthValidator(inputs.fruit)
            && lengthValidator(inputs.toppings)
    }

    return (
        <div className="w-25 mx-auto">
            <h1>Make a Sundae - Simple Form</h1>
            <form>{/* topping, flavor, sauce, size, fruit, whipped cream + cherry(?), dairy-free*/}
                <div className="form-group">
                    <label htmlFor="flavor">Flavor</label>
                    <input className="form-control" name="flavor" type="text" onChange={onChangeHandler} />
                    <span className='alert-danger'>{!lengthValidator(form.flavor) && form.flavor.length > 0 && "you need at least 3 characters!"}</span>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="sauce">Sauce</label>
                    <input className="form-control" name="sauce" type="text" onChange={onChangeHandler}/>
                    <span className='alert-danger'>{!lengthValidator(form.sauce) && form.sauce.length > 0 && "you need at least 3 characters!"}</span>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="toppings">Topping</label>
                    <input className="form-control" name="toppings" type="text" onChange={onChangeHandler}/>
                    <span className='alert-danger'>{!lengthValidator(form.toppings) && form.toppings.length > 0 && "you need at least 3 characters!"}</span>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="fruit">Fruit</label>
                    <input className="form-control" name="fruit" type="text" onChange={onChangeHandler}/>
                    <span className='alert-danger'>{!lengthValidator(form.fruit) && form.fruit.length > 0 && "you need at least 3 characters!"}</span>
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
                {
                    allValid(form)
                    ?<input type="submit" className="btn btn-lg btn-success"/>
                    :<input type="submit" className="btn btn-lg btn-success" disabled/>
                }
            </form>
        </div>
    )
}

export default SimpleForm;