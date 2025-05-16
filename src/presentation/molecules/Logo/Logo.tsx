import React from 'react';
import Image from 'next/image';
import Style from '../Logo/Logo.module.css'

const Logo = () => {
    return <Image src="/assets/logos/logo.png" alt="Logo" width={180} height={180} className={Style.logo} priority />;
};

export default Logo;