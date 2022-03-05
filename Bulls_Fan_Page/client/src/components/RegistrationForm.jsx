import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
    // form info stored in state variables
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });
    const history = useHistory();
    const [errors,setErrors] = useState({});


    const Register = (event) => {
        event.preventDefault();
        // objectify the info
        axios.post("http://localhost:8000/api/users/register",form,{withCredentials:true})
            .then(res => {
                console.log("res after registering", res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    //redirect to dashboard
                    history.push("/api/users/dashboard")
                }
            })
            .catch(err => {
                console.log("err after register", err)
            })
    }

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={Register}>
                <div className="form-group mb-2">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' className='form-control' onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.username?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' className='form-control' onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.email?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' className='form-control' onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.password?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input type="password" name='confirm' className='form-control' onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.confirm?.message}</span>
                </div>
                <input type="submit" value="Register" className='btn btn-primary mt-3' />
            </form>
        </div>
    );
};

export default RegistrationForm;