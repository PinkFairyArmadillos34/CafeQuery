import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Logout = () => {
    return (
        <>
        <div>
            <h1>
                Welcome <span className="user_name">UserNameGoesHere</span>
                <button className="logout_btn">Logout</button>
            </h1>
        </div>
        </>
    )
}

export default Logout