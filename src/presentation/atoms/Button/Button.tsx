import React from 'react';
import Image from 'next/image';
import Style from '../Button/Button.module.css'

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    iconSrc?: string;
    altText?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' , iconSrc , altText }) => {
    const styles = variant === 'primary' ? Style.buttonPrimary : Style.buttonSecondary;
    return (
        <button className={`${Style.button} ${styles}`} onClick={onClick}>
            {iconSrc && (
                <Image
                    src={iconSrc}
                    alt={altText || 'icon'}
                    width={20}
                    height={20}
                    className= {Style.iconMicrs}

                />
            )}
            {label}
        </button>
    );
};

export default Button;
