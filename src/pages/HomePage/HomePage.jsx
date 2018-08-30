import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Welcome to Marble!</h1>
            <p>Marble delivers quality organic grass fed beef right to your door.</p>
            <p>We hand the jerky creation process with love and attention to detail, which in return, provides you with a great tasting product!</p>
            <h2>Marble Team</h2>
            <div className="TeamImages">
                <div>
                    <h4>Nick Kim</h4>
                    <p>Co-Founder</p>
                    <img className="TeamImage" src="https://imgur.com/VN9joK7.jpeg" alt="co-founder" style={{ height: 250, width: 250 }}></img>
                </div>
                <div>
                    <h4>Mike Kim</h4>
                    <p>Lead Developer</p>
                    <img className="TeamImage" src="https://imgur.com/N6RizeO.jpeg" alt="lead developer" style={{ height: 250, width: 250 }}></img>
                </div>
                <div>
                    <h4>Happy Cow</h4>
                    <p>Lead Jerky Producer</p>
                    <img className="TeamImage" src="https://imgur.com/SOQlENH.jpeg" alt="cow" style={{ height: 250, width: 250 }}></img>
                </div>
            </div>
            <Link to="/products" className="btn-default btn">Browse Products</Link>
        </div>
    )
}

export default HomePage;