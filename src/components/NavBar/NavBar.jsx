import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light navbar-1 white">
            <a className="navbar-brand" href="/"><img className="marble-logo" src="https://i.imgur.com/uR5VjdD.png" alt="marble-logo"/></a>
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
                        <a className="nav-link" href="/about">About</a>
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