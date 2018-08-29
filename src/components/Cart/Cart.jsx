import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <CartItems cart={props.cart} 
            handleCheckoutModal={props.handleCheckoutModal}
            />
        </div>
    );
}

export default Cart;