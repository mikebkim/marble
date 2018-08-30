import React from 'react';
import Cart from '../../components/Cart/Cart';
import './CartPage.css';

const CartPage = (props) => {
    return (
        <div className="CartPage">
            {props.cart &&
                <Cart cart={props.cart}
                    handleCheckoutModal={props.handleCheckoutModal}
                    handleRemoveItem={props.handleRemoveItem}
                />
            }
        </div>
    )
}

export default CartPage;