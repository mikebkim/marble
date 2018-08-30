import React from 'react';
import Cart from '../../components/Cart/Cart';
import './CartPage.css';

const CartPage = (props) => {
    return (
        <div>
            {props.cart &&
                <Cart cart={props.cart}
                    handleCheckoutModal={props.handleCheckoutModal}
                />
            }
        </div>
    )
}

export default CartPage;