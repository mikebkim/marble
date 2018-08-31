import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let total = props.cart.items.reduce((tot, item) => tot + (item.product.price * item.quantity), 0);
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <CartItems cart={props.cart}
                handleCheckoutModal={props.handleCheckoutModal}
                handleRemoveItem={props.handleRemoveItem}
                handleAddItem={props.handleAddItem}
            />
            <div className="OrderSummary">
                <h1>Order Summary</h1>
                <br></br>
                <p>Sub Total: ${total}</p>
                <p>Tax: 7.25%</p>
                <p>Shipping: FREE</p>
                <strong><p>Total: ${parseFloat(total + (total * .0725)).toFixed(2)}</p></strong>
                <br></br>
                <Link to="/checkout" className="btn-default btn success">Checkout</Link>
            </div>
        </div>
    );
}

export default Cart;