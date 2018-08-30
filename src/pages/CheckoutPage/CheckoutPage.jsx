import React from 'react';
import Checkout from '../../components/Checkout/Checkout';
import './CheckoutPage.css';


const CheckoutPage = (props) => {
    return (
        <div className="CheckoutPage">
            <div>
                <Checkout />
            </div >
            <div>
                <h1>Order Summary</h1>
                <h2>Total:</h2>
            </div>
        </div>
    )
}

export default CheckoutPage;