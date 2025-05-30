import React from "react";
import Link from "next/link";
import Style from "../LabelNav/LableNav.module.css";

interface LabelProps {
    text: string;
    href?: string;
    onClick?: () => void;
}

const LabelNav: React.FC<LabelProps> = ({ text, href, onClick }) => {
    if (href) {
        return (
            <Link href={href} className={Style.label} onClick={onClick}>
                {text}
            </Link>
        );
    }
    return (
        <span className={Style.label} onClick={onClick}>
            {text}
        </span>
    );
};

export default LabelNav;
