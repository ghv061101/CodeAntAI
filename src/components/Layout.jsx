import React from "react";
import Sidebar from "../components/SideBar";

const Layout = ({ children }) => {
    return (
        <div style={{display: 'flex'}}>
            {/* Sidebar */}
            <div style={{width:'15%',height:'100vh'}} >
            <Sidebar />
            </div>

            {/* Main Content */}
            <div style={{marginLeft:'2.5%'}}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
