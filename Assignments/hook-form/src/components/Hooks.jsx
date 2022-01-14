import React, { useState } from "react";

const Hooks = (props) => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPw: "",
    })

    const createForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <form className="w-25 mt-5 mx-auto">
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input className="form-control" name="firstName" type="text" onChange={createForm} />
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input className="form-control" type="text" name="lastName" onChange={createForm} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input className="form-control" type="text" name="email" onChange={createForm} />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className="form-control" type="text" name="password" onChange={createForm} />
                </div>
                <br />
                <div>
                    <label htmlFor="confirmPw">Confirm Password: </label>
                    <input className="form-control" type="text" name="confirmPw" onChange={createForm} />
                </div>
            </form>
            <div>
                <br />
                <h2>Your Form Data</h2>
                <p className="mt-3">First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPw}</p>
            </div>
        </>
    );
}

export default Hooks;