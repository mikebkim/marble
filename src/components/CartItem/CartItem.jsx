import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.item.product.img} alt={props.item.product.name}></img>
            <div className="card-body">
                <p>{props.item.product.name}</p>
                <p>Price:&nbsp;{props.item.product.price}</p>
                <p>Description:&nbsp;{props.item.product.description}</p>
                <p>Ingredients:&nbsp;{props.item.product.ingredients}</p>
                <div className="cart-btn">
                    <p><button className="btn-primary btn" onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button></p>
                    <p className="item-qty">Qty:&nbsp;{props.item.quantity}</p>
                    <p><button className="btn-primary btn" onClick={() => props.handleAddItem(props.item.product._id)}> + </button></p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;