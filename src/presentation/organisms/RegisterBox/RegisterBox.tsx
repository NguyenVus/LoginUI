import React from 'react';
import Logo from '../../molecules/Logo/Logo';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';
import Style from '../../organisms/LoginBox/LoginBox.module.css';


const RegisterBox = () => {
    return (
        <div className={Style.formContainer}>
            <Logo />
            <RegisterForm />
        </div>
    );
};

export default RegisterBox;