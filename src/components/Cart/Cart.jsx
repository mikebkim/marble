import React from 'react';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
    return (
        <div>
            <h1>Cart</h1>
            <CartItems cart={props.cart} />
        </div>
    );
}

export default Cart;