// src/presentation/atoms/NavItem/index.tsx

'use client'
import React from "react";
import LabelNav from "@/presentation/atoms/LabelNav/LabelNav";

interface NavItemProps {
    label: string
    href: string

}

export default function NavItem({ label, href }: NavItemProps) {

    return (
            <LabelNav text={label} href={href} />
    )
}
