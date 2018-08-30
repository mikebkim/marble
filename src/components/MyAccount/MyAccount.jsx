import React from 'react';
import './MyAccount.css';

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            creditCard: '',
            expDate: '',
            cvc: '',
            name: ''
        }
    }

    render() {
        return (
            <div className="MyAccount">
                <h1>My Account</h1>
                <br></br>
                <h3>{this.props.user.name}</h3>
                <p>{this.props.user.address}</p>
                <p>{this.props.user.address2}</p>
                <p>{this.props.user.city}</p>
                <p>{this.props.user.states}</p>
                <p>{this.props.user.zip}</p>
                <div className="Update">
                    <h3>Shipping Information</h3>
                    <br></br>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control update" placeholder="Email" value={this.state.email} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Name" value={this.state.name} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Address" value={this.state.adress} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Address 2" value={this.state.address2} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="City" value={this.state.city} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="State" value={this.state.state} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Zipcode" value={this.state.zip} />
                            </div>
                        </div>
                        <br></br>
                        <h3>Billing Information</h3>
                        <br></br>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Credit Card Number" value={this.state.creditCard} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Expiration Date" value={this.state.expDate} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="CVC" value={this.state.cvc} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn-default btn">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default MyAccount;