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
                <p>{this.props.product.name}</p>
                <p>{this.props.product.description}</p>
                <p><strong>Ingredients:</strong>&nbsp;{this.props.product.ingredients}</p>
                <p>${this.props.product.price}</p>
            </div>
        );
    }
};

export default CheckoutModalPop;