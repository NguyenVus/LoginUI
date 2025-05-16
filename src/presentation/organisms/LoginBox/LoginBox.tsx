import React from 'react';
import Logo from '../../molecules/Logo/Logo';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import Style from '../../organisms/LoginBox/LoginBox.module.css';


const LoginBox = () => {
    return (
        <div className={Style.formContainer}>
            <Logo />
            <LoginForm />
        </div>
    );
};

export default LoginBox;