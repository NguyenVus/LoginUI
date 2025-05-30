import React from 'react';
import Logo from '../../molecules/Logo/Logo';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';



const RegisterBox = () => {
    return (
        <div
            className="
  w-[90%] max-w-[340px] mx-auto text-center
  px-[24px] py-[32px]
  border-2 border-gray-800
  rounded-xl
  shadow-[0_8px_24px_rgba(59,130,246,0.3)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.6)]
  transition-all duration-300 ease-in-out
    hover:shadow-[0_16px_40px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_16px_40px_rgba(255,255,255,0.9)]
  hover:-translate-y-2
  cursor-pointer
    "
        >
            <Logo />
            <RegisterForm />
        </div>
    );
};

export default RegisterBox;