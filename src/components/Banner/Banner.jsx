import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container-fluid">
        <img className="marble-title" src="https://i.imgur.com/vdAzPXS.png" alt="marble-title" />
            <div className="HomePage-items">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="4000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://imgur.com/ezwTDRS.jpeg" alt="Marble Design0"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/54I7sJ9.jpeg" alt="Marble Design1"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/dpfp7Ro.jpeg" alt="Marble Design2"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/DkyrhX9.png" alt="Marble Design3"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;