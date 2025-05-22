import React from "react";

interface DividerWithTextProps {
    text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                color: "#666",
                margin: "5px 0",
                padding:"0 20px"
            }}
        >
            <div
                style={{
                    flex: 1,
                    borderBottom: "1px solid #ccc",
                    marginRight: 12,
                }}
            />
            <span
                style={{
                    background: "white",
                    padding: "0 5px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
        {text}
      </span>
            <div
                style={{
                    flex: 1,
                    borderBottom: "1px solid #ccc",
                    marginLeft: 12,
                }}
            />
        </div>
    );
};

export default DividerWithText;
