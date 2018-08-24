import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <a href='/products'>Products</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <a href='/cart'>Cart</a>
        </nav>
    )
}

export default NavBar;