import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Style from '../TogglePasswordButton/TogglePasswordButton.module.css';

interface TogglePasswordButtonProps {
    show: boolean;
    onToggle: () => void;
}

const TogglePasswordButton: React.FC<TogglePasswordButtonProps> = ({ show, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={show ? 'Hide password' : 'Show password'}
            className={Style.TogglePasswordButton}
        >
            {show ? <FaEyeSlash /> : <FaEye />}
        </button>
    );
};

export default TogglePasswordButton;
