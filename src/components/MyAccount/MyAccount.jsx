import React from 'react';
import tokenService from '../../utils/tokenService';
import './MyAccount.css';

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            address2: '',
            city: '',
            states: '',
            zip: '',
            creditCard: '',
            expDate: '',
            cvc: '',
            name: ''
        }
    }

    handleChange = (field, event) => {
        this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(tokenService.getUserFromToken());
        var self = this;
        var body = this.state;
        var userId = tokenService.getUserFromToken()._id;
        console.log(userId);
        fetch(`/api/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                states: this.state.states,
                zip: this.state.zip,
                creditCard: this.state.creditCard,
                expDate: this.state.expDate,
                cvc: this.state.cvc,
                name: this.state.name,
                email: tokenService.getUserFromToken().email
                // userId: tokenService.getUserFromToken()._id
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            console.log(json);
            self.setState({
                address: json.user.address,
                address2: json.user.address2,
                city: json.user.city,
                states: json.user.states,
                zip: json.user.zip,
                creditCard: json.user.creditCard,
                expDate: json.user.expDate,
                cvc: json.user.cvc,
                name: json.user.name
            });
        });
    }

    componentDidMount() {
        var self = this;
        fetch(`/api/users/${tokenService.getUserFromToken()._id}`)
            .then(function (res) {
                return res.json()
            }).then(function (json) {
                console.log(json);
                self.setState({
                    address: json.user.address,
                    address2: json.user.address2,
                    city: json.user.city,
                    states: json.user.states,
                    zip: json.user.zip,
                    creditCard: json.user.creditCard,
                    expDate: json.user.expDate,
                    cvc: json.user.cvc,
                    name: json.user.name
                });
            });
    }

    render() {
        return (
            <div className="MyAccount">
                <h1>My Account</h1>
                <div className="Update">
                    <h3>Shipping Information</h3>
                    <br></br>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange('name', event)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Address" value={this.state.adress} onChange={(event) => this.handleChange('address', event)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Address 2" value={this.state.address2} onChange={(event) => this.handleChange('address2', event)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="City" value={this.state.city} onChange={(event) => this.handleChange('city', event)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="State" value={this.state.states} onChange={(event) => this.handleChange('states', event)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control update" placeholder="Zipcode" value={this.state.zip} onChange={(event) => this.handleChange('zip', event)} />
                            </div>
                        </div>
                        <br></br>

                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn-default btn" type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>

                <br></br>
                <h3>{this.state.name}</h3>
                <p>{this.state.address}</p>
                <p>{this.state.address2}</p>
                <p>{this.state.city}</p>
                <p>{this.state.states}</p>
                <p>{this.state.zip}</p>
            </div>
        );
    }
};

export default MyAccount;