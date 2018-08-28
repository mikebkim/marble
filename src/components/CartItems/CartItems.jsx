import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartItems = (props) => {
    return (
        <div className="CartItems">
            { props.cart ?
                props.cart.items.map(item => <CartItem
                    item={item}
                />)
                :
                <h3>No Items in Cart</h3>
            }
        </div>
    );
};

export default CartItems;