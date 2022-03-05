import {React} from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const SignIn = () => {
    return (
        <div>
            <h1 className="container-fluid py-5 mb-4 bg-danger bulls rounded-3">Welcome to ChiBulls4Life!!!</h1>
            <h4 className="mb-3">Sign in below via Registration or Login</h4>
            <div className="row">
                <div className="col">
                    <RegistrationForm/>
                </div>
                <div className="col">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default SignIn;