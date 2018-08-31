import React, { Component } from 'react';
import './CheckoutModalPop.css';

class CheckoutModalPop extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="CheckoutModalPop">
                <img height="110" width="230" src={this.props.product.img} alt={this.props.product.name} ></img>
                <h4>{this.props.product.name}</h4>
                <p>{this.props.product.description}</p>
                <p>{this.props.product.ingredients.replace(/,/g, ',  ')}</p>
                <p>${this.props.product.price}</p>
            </div>
        );
    }
};

export default CheckoutModalPop;