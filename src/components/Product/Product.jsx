import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.product.img} alt={props.product.name}></img>
            <div className="card-body">
                <h3>{props.product.name}</h3>
                <p>Price:&nbsp;{props.product.price}</p>
                <p>Description:&nbsp;{props.product.description}</p>
                <p>Ingredients:&nbsp;{props.product.ingredients}</p>
                <button className="btn-primary btn" onClick={() => props.handleAddItem(props.product._id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;