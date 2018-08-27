import React from 'react';
import './MyAccount.css';

const MyAccount = (props) => {
    return (
        <div>
        {props.user.name}
        {props.user.address}
        {props.user.address2}
        {props.user.city}
        {props.user.states}
        {props.user.zip}
        </div>
    );
}

export default MyAccount;