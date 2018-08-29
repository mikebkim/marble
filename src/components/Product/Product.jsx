import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="card">
            <img onClick={() => props.handleProductModal(props.product)} className="card-img-top hvr-float-shadow" src={props.product.img} alt={props.product.name} ></img>
            <div className="card-body">
                <p>{props.product.name}</p>
                <p>${props.product.price}</p>
                <button className="btn-default btn" onClick={() => props.handleAddItem(props.product._id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;