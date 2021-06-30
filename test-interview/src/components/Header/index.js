import React from 'react';
import './index.css'
import Button from 'react-bootstrap/Button'
import { FiMenu } from "react-icons/fi"; 



function Header() {
    return (

        <div className="Header">
                <FiMenu size="40"></FiMenu>
            <div className="Div">
                <h4>Page Test Interview</h4>
            </div>
            <div className="Div">
                <button className="Btn1">Sign In</button>
                <button className="Btn2">Register</button>
            </div>
        </div>
    );
}

export default Header