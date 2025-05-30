"use client";
import React, { useState, useEffect } from "react";
import MenuList from "../../molecules/MenuList/MenuList";
import Button from "../../atoms/Button/ButtonHome";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "@/presentation/molecules/Logo/Logo";
import SidebarMenu from "@/presentation/molecules/SidebarMenu/SidebarMenu";
import LanguageSwitcher from "@/presentation/molecules/LanguageSwitcher/LanguageSwitcher";
import ModeToogle from "@/presentation/atoms/ModeToggle/ModeToggle";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isOverlay, setIsOverlay] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 700) {
                setIsOpen(false); // Mặc định đóng sidebar trên mobile
                setIsOverlay(true); // overlay mode
            } else if (window.innerWidth < 1020) {
                // Màn hình từ 700 đến 1020 thì sidebar đóng + overlay false
                setIsOpen(false);
                setIsOverlay(false);
            } else {
                setIsOpen(true); // mở sidebar trên desktop lớn
                setIsOverlay(false); // không overlay
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 w-[260px] h-full shrink-0 bg-white border-r border-gray-200
          rounded-tr-[16px] rounded-br-[16px]
          transition-transform duration-500 ease-in-out
          z-30
          ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }
          ${
                    isOverlay && isOpen
                        ? "shadow-lg" // tạo bóng khi overlay
                        : ""
                }
        `}
                style={{
                    position: isOverlay ? "fixed" : "fixed",
                    zIndex: 30,
                }}
            >
                <nav className="h-full py-4 px-4 flex flex-col">
                    {/* Header sidebar */}
                    <div className="flex items-center justify-between h-12 mb-4 px-2">
                        <h2>
                        <Button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close sidebar"
                            className="p-2 hover:bg-gray-100 rounded-md transition"
                        >
                            <HiX size={20} />
                        </Button>
                        </h2>
                    </div>
                    <MenuList />
                </nav>
            </aside>

            {/* Main Content */}
            <main
                className={`
          flex-1 flex flex-col bg-gray-50 transition-all duration-500 ease-in-out
          ${!isOverlay && isOpen ? "ml-[260px]" : "ml-0"}
          ${isOverlay && isOpen ? "pointer-events-none" : "pointer-events-auto"} 
          relative
        `}
            >
                {/* Header */}
                <div className="flex items-center justify-between w-full h-12 px-4 border-b bg-white shadow-sm">
                    <div className="flex items-center gap-6 h-full">
                        {!isOpen && (
                            <h2>
                            <Button
                                onClick={() => setIsOpen(true)}
                                aria-label="Open sidebar"
                                className="p-2 hover:bg-gray-100 rounded-md transition"
                            >
                                <HiMenu size={20} />
                            </Button>
                            </h2>
                        )}
                        <Logo />
                    </div>
                    <SidebarMenu />
                    <div className="flex items-center gap-5 h-full">
                        <LanguageSwitcher />
                        <ModeToogle />
                    </div>
                </div>

                {/* Nội dung chính bạn đặt ở đây */}
            </main>
        </div>
    );
}
