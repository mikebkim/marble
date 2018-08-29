import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Welcome to Marble!</h1>
            <p>Marble delivers quality organic grass fed beef right to your door.</p>
            <p>We hand the jerky creation process with love and attention to detail, which in return, provides you with a great tasting product!</p>
            <h1>Marble Team</h1>
            <div>
                <img></img>
                <img></img>
            </div>
            <h2>Swag</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://i.imgur.com/lErXu6s.png" alt="you can't beat our meat"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/i1hlVkT.png" alt="meat head"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/fkrdslw.png" alt="jerk"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/a9S88KD.png" alt="marble design"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default HomePage;