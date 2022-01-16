import React, { useState } from "react";

const MoreForms = (props) => {

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
            <form className="w-25 mt-5 mx-auto">
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input className="form-control" name="firstName" type="text" onChange={createForm}/>
                    <span className="alert-danger">{form.firstName.length < 2 && form.firstName.length > 0 && "First Name must be at least 2 character"}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input className="form-control" type="text" name="lastName" onChange={createForm}/>
                    <span className="alert-danger">{form.lastName.length < 2 && form.lastName.length > 0 && "Last Name must be at least 2 character"}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input className="form-control" type="text" name="email" onChange={createForm}/>
                    <span className="alert-danger">{form.email.length < 5 && form.email.length > 0 && "Email must be at least 5 character"}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className="form-control" type="text" name="password" onChange={createForm}/>
                    <span className="alert-danger">{form.password.length < 8 && form.password.length > 0 && "Password must be at least 8 character"}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="confirmPw">Confirm Password: </label>
                    <input className="form-control" type="text" name="confirmPw" onChange={createForm}/>
                    <span className="alert-danger">{form.confirmPw !== form.password  && form.confirmPw.length > 0 && "Passwords must match"}</span>
                </div>
            </form>
    );
}

export default MoreForms;