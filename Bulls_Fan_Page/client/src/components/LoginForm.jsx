import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const [loginError, setLoginError] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault();
        // put the form info in an object (objectify it)
        axios.post("http://localhost:8000/api/users/login", loginForm, { withCredentials: true })
            .then(res => {
                console.log("response when logging in", res)
                if (res.data.error) {
                    setLoginError(res.data.error)
                }else{
                    //redirect to dashboard
                    history.push("/api/users/dashboard")
                }
            })
            .catch(err => console.log("err when logging in: ", err))
    }
    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={login}>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' className='form-control' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' className='form-control' onChange={onChange} />
                    <span className='alert-danger'>{loginError}</span>
                </div>
                <input type="submit" value="Login" className='btn btn-secondary mt-3' />
            </form>
        </div>
    );
};

export default LoginForm;