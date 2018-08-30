import React from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const CartItems = (props) => {
    return (
        <div className="CartItems">
            {props.cart ?
                props.cart.items.map(item =>
                    <CartItem
                        key={item.product._id}
                        item={item}
                        handleCheckoutModal={props.handleCheckoutModal}
                        product={item.product}
                    />)
                :
                <h3>No Items in Cart</h3>
            }
            <h3>Sub Total: </h3>
            <h3>Tax: </h3>
            <h3>Total: </h3>
            <Link to="/checkout" type="button" className="btn btn-success">Checkout</Link>&nbsp;&nbsp;&nbsp;
        </div>
    );
};

export default CartItems;