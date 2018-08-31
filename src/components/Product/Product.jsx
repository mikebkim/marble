import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="card">
            <div className="hvr-float-shadow">
                <img onClick={() => props.handleProductModal(props.product)} className="card-img-top" src={props.product.img} alt={props.product.name} ></img>
            </div>
            <div className="card-body">
                <p>{props.product.name}</p>
                <p>${props.product.price}</p>
                {props.user ? <button className="btn-default btn" onClick={() => props.handleAddItem(props.product._id)}>Add to Cart</button> : <p>Please register to add items</p>}
            </div>
        </div>
    )
}

export default Product;