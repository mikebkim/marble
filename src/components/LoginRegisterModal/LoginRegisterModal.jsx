import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import './LoginRegisterModal.css'

const LoginRegisterModal = (props) => {
    return (
        <div className="LoginRegisterModal">
            <div className="LoginRegisterModal-content">
            <img src="https://i.imgur.com/2BrNPaQ.png" alt="marblelogo" className="marblelogo" style={{ height: 20, width: 120, margin: 10 }}></img>
                <div className="LoginRegisterModal-close hvr-back-pulse" onClick={props.onClose}>X</div>
                {props.children}
                <div className="LoginResigerFlex">
                <LoginForm {...props} />
                <RegisterForm {...props} />
                </div>
            </div>
        </div>
    );
}

export default LoginRegisterModal;
