

interface ToggleButtonProps {
    onClick: () => void;
}

export default function ToggleButton({ onClick }: ToggleButtonProps) {
    return (
        <button
            className="md:hidden p-4 text-2xl z-50 relative"
            onClick={onClick}
        >
            ☰
        </button>
    );
}
