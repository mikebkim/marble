import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="card CartItem">
            <img onClick={() => props.handleCheckoutModal(props.product)} className="card-img-top" src={props.item.product.img} alt={props.item.product.name}></img>
            <div className="card-body">
                <p>{props.item.product.name}</p>
                <p>${props.item.product.price}</p>
                <div className="cart-btn">
                    <button className="btn-default btn remove" onClick={() => props.handleRemoveItem(props.item.product._id)}><strong>-</strong></button>
                    <p className="item-qty">Qty:&nbsp;{props.item.quantity}</p>
                    <button className="btn-default btn add" onClick={() => props.handleAddItem(props.item.product._id)}><strong>+</strong></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;