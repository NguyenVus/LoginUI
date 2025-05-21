import React from 'react';
import RegisterBox from '../organisms/RegisterBox/RegisterBox';
import Header from "@/presentation/organisms/Header/Header";
import Footer from "@/presentation/organisms/Footer/Footer";

const RegisterTemplate = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                <RegisterBox />
            </div>
            <Footer />
        </div>
    );
};

export default RegisterTemplate;