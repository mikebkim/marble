import React, { Component } from 'react';
import './RegisterForm.css';
import userService from '../../utils/userService';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            address2: '',
            city: '',
            states: '',
            zip: '',
            password: '',
            passwordConf: '',
            message: ''
        };
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    handleChange = (field, e) => {
        this.updateMessage('');
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        userService.signup(this.state)
            .then(() => {
                this.props.handleSignup();
            })
            .catch(err => this.updateMessage(err.message));
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="RegisterForm">
                <header className="header-footer">Register</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control register" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control register" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control register" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control register" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
                        </div>
                    </div>
                    <div className="register-address">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control register" placeholder="Address" value={this.state.address} onChange={(e) => this.handleChange('address', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control register" placeholder="Address 2" value={this.state.address2} onChange={(e) => this.handleChange('address2', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control register" placeholder="City" value={this.state.city} onChange={(e) => this.handleChange('city', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control register" placeholder="State" value={this.state.states} onChange={(e) => this.handleChange('states', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control register" placeholder="Zipcode" value={this.state.zip} onChange={(e) => this.handleChange('zip', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-default" disabled={this.isFormInvalid()}>Register</button>&nbsp;&nbsp;
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default RegisterForm;