// src/components/molecules/SelectOption/index.tsx


import { useState, useRef, useEffect } from 'react';
import GlobeIcon from '@/presentation/atoms/GlobeIcon/GlobeIcon';
import LocaleLabel from '@/presentation/atoms/LocaleLabel/LocaleLabel';
import DropdownList, { Option } from '@/presentation/atoms/Dropdown/Dropdown';

interface SelectOptionProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function SelectOption({
                                         options, value, onChange, disabled = false
                                     }: SelectOptionProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            ref={ref}
            style={{ display: 'inline-block', cursor: 'pointer', position: 'relative', textAlign: 'center' }}
            onClick={() => !disabled && setOpen((prev) => !prev)}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <GlobeIcon />
                <LocaleLabel code={value} />
            </div>
            {open && (
                <DropdownList
                    options={options}
                    selectedValue={value}
                    onSelect={(val) => {
                        onChange(val);
                        setOpen(false);
                    }}
                />
            )}
        </div>
    );
}
