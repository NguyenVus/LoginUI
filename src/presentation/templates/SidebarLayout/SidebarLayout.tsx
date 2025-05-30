import React from 'react';
import Footer from "@/presentation/organisms/Footer/Footer";
import SidebarNav from "@/presentation/organisms/SidebarNav/SidebarNav";

const SidebarLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SidebarNav/>
            <Footer />
        </div>
    );
};

export default SidebarLayout;
