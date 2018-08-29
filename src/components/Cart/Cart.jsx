import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h1>Cart</h1>
            <div className="Cart">
                <CartItems cart={props.cart}
                    handleCheckoutModal={props.handleCheckoutModal}
                />
            </div>
        </div>
    );
}

export default Cart;