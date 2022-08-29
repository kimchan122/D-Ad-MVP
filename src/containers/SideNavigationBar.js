import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { NavLink } from "react-router-dom";

const SideNavigationBar = () => {
    return (
        <ProSidebar style={{ height: "100vh", position: "fixed"}}>
            <SidebarHeader>
                <Menu iconShape="square">
                    <h3 className="sidebar-header">D-Ad</h3>
                </Menu>
            </SidebarHeader>

            <SidebarContent>
                <NavLink to="/" className={({ isActive }) => (isActive ? "highlight-on" : "highlight-off")}>
                    <div className="highlight-icon"><MdOutlineSpaceDashboard style={{ width:"14px" }}/></div>
                    <p className="highlight-text">Dashboard</p>
                </NavLink>
                <NavLink to="/makeads" className={({ isActive }) => (isActive ? "highlight-on" : "highlight-off")}>
                    <div className="highlight-icon"><MdOutlineSpaceDashboard style={{ width:"14px" }}/></div>
                    <p className="highlight-text">Make Ads</p>
                </NavLink>
                <NavLink to="/editinfo" className={({ isActive }) => (isActive ? "highlight-on" : "highlight-off")}>
                    <div className="highlight-icon"><MdOutlineSpaceDashboard style={{ width:"14px" }}/></div>
                    <p className="highlight-text">Edit Info</p>
                </NavLink>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: "center" }}>
                <div className="sidebar-btn-wrapper" style={{ padding: '20px 24px' }}>
                    <a className="sidebar-btn" href="https://unchain.on.fleek.co/">
                        <TbWorld />
                    </a>
                    <a className="sidebar-btn" href="https://unchain.on.fleek.co/">
                        <FaGithub />
                    </a>
                    <a className="sidebar-btn" href="https://unchain.on.fleek.co/">
                        <FaGithub />
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideNavigationBar;