"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import DropdownList, { Option } from "../Dropdown/Dropdown"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [open, setOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>(null)

    // Đợi mounted để tránh lỗi hydration
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Click ra ngoài thì đóng dropdown
    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const options: Option[] = [
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "System", value: "system" },
    ]

    const handleSelect = (value: string) => {
        setTheme(value)
        setOpen(false)
    }

    const renderIcon = () => {
        switch (theme) {
            case "dark":
                return <Moon className="h-5 w-5" />
            case "light":
                return <Sun className="h-5 w-5" />
            default:
                return <Sun className="h-5 w-5" />
        }
    }

    if (!mounted) return null

    return (
        <div className="relative inline-block" ref={ref}>
            <button
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Toggle theme"
                className="border border-gray-300 rounded-md p-2 w-10 h-10 flex items-center justify-center
                   bg-transparent cursor-pointer
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   transition-colors duration-200"
            >
                {renderIcon()}
                <span className="sr-only">Toggle theme</span>
            </button>

            {open && (
                <DropdownList
                    options={options}
                    selectedValue={theme || "system"}
                    onSelect={handleSelect}
                />
            )}
        </div>
    )
}
