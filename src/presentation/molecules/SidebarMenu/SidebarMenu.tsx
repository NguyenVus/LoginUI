// src/presentation/molecules/SidebarMenu/index.tsx

import NavItem from '../../atoms/NavItem/NavItem'

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Settings', href: '/settings' },
]

export default function SidebarMenu() {
    return (
        <nav className="flex items-center gap-x-4">
            {menuItems.map((item) => (
                <NavItem key={item.href} {...item} />
            ))}
        </nav>
    )
}
