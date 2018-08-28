import React from 'react';
import './MyAccount.css';

class MyAccount extends React.Component {
    render() {
        return (
            <div className="MyAccount">
                <h1>My Account</h1>
                <br></br>
                <br></br>
                <h3>{this.props.user.name}</h3>
                <p>{this.props.user.address}</p>
                <p>{this.props.user.address2}</p>
                <p>{this.props.user.city}</p>
                <p>{this.props.user.states}</p>
                <p>{this.props.user.zip}</p>
            </div>
        );
    }
}

export default MyAccount;