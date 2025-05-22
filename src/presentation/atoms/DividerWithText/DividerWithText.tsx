import React from "react";

interface DividerWithTextProps {
    text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
    return (
        <div className="flex items-center justify-center my-6 ">
            <div className="flex-grow mr-4 border-t border-gray-200"></div>

            <span className="px-4 py-4 text-gray-500 text-sm bg-white z-10 ">
                {text}
            </span>

            <div className="flex-auto ml-4 border-t border-gray-200"></div>
        </div>
    );
};

export default DividerWithText;
