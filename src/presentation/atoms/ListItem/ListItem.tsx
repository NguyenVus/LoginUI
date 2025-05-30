import React from "react";

interface ListItemProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
                                               children,
                                               href = "#",
                                               className = "",
                                           }) => {
    const baseStyle: React.CSSProperties = {
        letterSpacing: "1px", // 👈 dãn cách chữ cái
    };

    return (
        <div>
            <a
                href={href}
                style={baseStyle}
                className={`flex items-center gap-3 px-6 py-4 text-lg font-semibold text-gray-800 rounded-lg cursor-pointer transform transition-all duration-200 hover:text-blue-600 hover:scale-105 no-underline ${className}`}
            >
                {children}
            </a>
        </div>
    );
};

export default ListItem;
