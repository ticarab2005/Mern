import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("res when getting logged in user", res)
                if (res.data.results) {
                    //this means the user is logged in and can access this page
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err => {
                // this means someone who is not logged in tried to access the dashboard
                console.log("err when getting logged in user", err)
                history.push("/")
            })
    }, [loggedInUser])
    const logout = () => {
        axios.get("http://localhost:8000/api/users/logout", { withCredentials: true })
            .then(res => {
                console.log("logged out!",res)
                history.push("/")
            })
            .catch(err => {
                console.log("errrr, logging out", err)
            })
    }
    return (
        <div>
            {/*  className="d-flex justify-content-between mt-3 text-light fs-5" */}
                <p>Welcome {loggedInUser.username}!</p>
            <div className="nav">
                <h1></h1>
                <ul className='nav-links'>
                <Link> </Link>

                <button onClick={logout} className="btn btn-danger">Log Out</button>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;