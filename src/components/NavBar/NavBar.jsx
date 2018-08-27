import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light navbar-1 white">
            <a className="navbar-brand" href="/"><img className="marble-logo" src="https://i.imgur.com/uR5VjdD.png" alt="marble-logo" /></a>
            <div className="LoginRegisterLink">
                {props.user ? <span>Welcome, {props.user.name}&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span> : null}
                {props.user ? <Link to="" onClick={props.handleLogout}>Logout</Link> : <Link to="" onClick={props.handleLoginModal}>Login/Register</Link>}
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        {props.user ? <a className="nav-link" href="/myaccount">My Account</a> : null }
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;