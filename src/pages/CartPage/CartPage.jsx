import React from 'react';
import Cart from '../../components/Cart/Cart';
import Checkout from '../../components/Checkout/Checkout';
import './CartPage.css';

const CartPage = (props) => {
    return (
        <div className="CartPage">
            {props.cart &&
                <Cart cart={props.cart}
                    handleCheckoutModal={props.handleCheckoutModal}
                />
            }
            <Checkout />
        </div>
    )
}

export default CartPage;