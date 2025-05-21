// src/components/atoms/DropdownList/index.tsx
export interface Option {
    label: string;
    value: string;
}

interface DropdownListProps {
    options: Option[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

export default function DropdownList({ options, selectedValue, onSelect }: DropdownListProps) {
    return (
        <ul
            style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                backgroundColor: '#fff',
                border: '2px solid #ddd',
                borderRadius: 6,
                padding: '0 0',
                margin: 0,
                listStyle: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                minWidth: 140,
                zIndex: 1000
            }}
        >
            {options.map(({ label, value }) => (
                <li
                    key={value}
                    onClick={() => onSelect(value)}
                    style={{
                        padding: '10px 16px',
                        border: '1px solid #fff',
                        borderRadius: 6,
                        backgroundColor: value === selectedValue ? '#dad8d8' : 'white',
                        fontWeight: value === selectedValue ? 'bold' : 'normal',
                        color: '#303030',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#bab8b8')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = value === selectedValue ? '#dad8d8' : 'white')}
                >
                    {label}
                </li>
            ))}
        </ul>

    );
}
