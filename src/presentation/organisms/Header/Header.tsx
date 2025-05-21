import React from 'react';
import Logo from '../../molecules/Logo/Logo';
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between py-4 bg-white shadow-md sticky top-0 z-50 mx-[10px] h-16 relative">

            <div className="flex-1"></div>

            <div className="flex-1 flex justify-center">
                <Logo />
            </div>

            <div className="flex-1 flex justify-end mr-8">
                <LanguageSwitcher />
            </div>

        </header>
    );
};

export default Header;
