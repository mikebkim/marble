import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = (props) => {
    return (
        <div>
            {props.cart &&
                <Cart cart={props.cart}/>
            }
        </div>
    )
}

export default CartPage;