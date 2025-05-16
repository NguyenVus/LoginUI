import React from "react";
import Style from '../Label/Lable.module.css'

interface LabelProps {
    text: string;
    href?: string;
    onClick?: () => void;
}

const Label: React.FC<LabelProps> = ({ text, href, onClick}) => {
    return (
        <a
            className={Style.label}
            href={href}
            onClick={onClick}
        >
            {text}
        </a>
    );
};
export default Label;