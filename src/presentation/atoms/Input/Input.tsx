import React from 'react';
import Style from '../Input/Input.module.css'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: 'primary' | 'secondary';
}

const Input: React.FC<InputProps> = ({ type, placeholder,className, value,variant = 'primary' , onChange }) => {
    const styles = variant === 'primary' ? Style.inputPrimary : Style.inputSecondary;
    return (
        <input type={type} placeholder={placeholder} value={value}  onChange={onChange} className={`${Style.input} ${styles} ${className || ''}`}/>
    );
};

export default Input;