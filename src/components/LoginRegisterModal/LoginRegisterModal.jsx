import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import './LoginRegisterModal.css'

const LoginRegisterModal = (props) => {
    return (
        <div className="LoginRegisterModal">
            <div className='LoginRegisterModal-content'>
                <div className='LoginRegisterModal-close hvr-back-pulse' onClick={props.onClose}>X</div>
                {props.children}
                <LoginForm {...props} />
                <RegisterForm {...props} />
            </div>
        </div>
    );
}

export default LoginRegisterModal;
