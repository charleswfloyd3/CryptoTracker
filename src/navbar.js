import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './navbar.css'
function Navbar(props){

    return(
        <nav className="navbar">
            
            <p className="companyName"><img className="companySymbol" src={props.coinImage} ></img></p>
            <button className="signin_btn" onClick={props.searchInfo}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></button>
                        <button className="signup_btn" onClick={props.searchInfo}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Track</Link></button>
            <button className="signup_btn" onClick={props.searchInfo}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Search</Link></button>


        </nav>
    )
};

export default Navbar;
