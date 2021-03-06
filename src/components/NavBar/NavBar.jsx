import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-fixed-top navbar-light navbar-1 white">
            <a className="navbar-brand" href="/"><img className="marble-logo" src="https://i.imgur.com/uR5VjdD.png" alt="marble-logo" /></a>
            <div className="LoginRegisterLink">
                {props.user ? <span>Welcome to Marble, {props.user.name}&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span> : null}
                {props.user ? <Link to="" onClick={props.handleLogout}>Logout</Link> : <Link to="" onClick={props.handleLoginModal}>Login/Register</Link>}
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <li className="nav-item">
                        {props.user ? <Link to="/myaccount" className="nav-link">Account</Link> : null}
                    </li>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <li className="nav-item">
                        {props.user ? <Link to="/cart" className="nav-link">Cart</Link> : null}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;