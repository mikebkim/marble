import React, { Component } from 'react';
import './ProductModalPop.css';

class ProductModalPop extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="ProductModalPop">
                <img height="110" width="230" src={this.props.product.img} alt={this.props.product.name} ></img>
                <h3>{this.props.product.name}</h3>
                <p>{this.props.product.description}</p>
                <p>{this.props.product.ingredients.replace(/,/g, ',  ')}</p>
                <p>${this.props.product.price}</p>
            </div>
        );
    }
};

export default ProductModalPop;