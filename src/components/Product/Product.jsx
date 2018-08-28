import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.product.img} alt={props.product.name} ></img>
            <div className="card-body">
                <button onClick={() => props.handleProductModal(props.product)}>{props.product.name}</button>
                <p><strong>Price:</strong>&nbsp;{props.product.price}</p>
                <p><strong>Description:</strong>&nbsp;{props.product.description}</p>
                <p><strong>Ingredients:</strong>&nbsp;{props.product.ingredients}</p>
                <button className="btn-primary btn" onClick={() => props.handleAddItem(props.product._id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;