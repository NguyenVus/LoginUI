import React from 'react';
import Image from 'next/image';


const Logo = () => {
    return <Image src="/assets/logos/logo.png" alt="Logo" width={180} height={180} className="w-[120px] h-[70px] mx-auto mb-2.5  flex items-center justify-center relative" priority />;
};

export default Logo;
