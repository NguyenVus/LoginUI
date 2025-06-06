import React from "react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`
        bg-transparent
        border-none
        cursor-pointer
        ${className ?? ""}
      `}
            aria-label="Sidebar toggle"
        >
            {children}
        </button>
    );
};

export default Button;
