import React from "react";
import ListItem from "../../atoms/ListItem/ListItem";


const MenuList: React.FC = () => {
    const items = [
        { label: "Trang chủ" },
        { label: "Sản phẩm" },
        { label: "Liên hệ" },
        { label: "Giới thiệu" },
    ];

    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-6">
            <ul className="space-y-4">
                {items.map(({ label }, index) => (
                    <ListItem key={index}>

                        <span>{label}</span>
                    </ListItem>
                ))}
            </ul>
        </div>
    );
};

export default MenuList;
