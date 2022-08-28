import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const SideNavigationBar = () => {
    return (
        <ProSidebar style={{ height: "100vh"}}>
            <SidebarHeader>
                <Menu iconShape="square">
                <MenuItem icon={<MdOutlineSpaceDashboard />}>asdf</MenuItem>

                </Menu>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="round">
                    <MenuItem icon={<MdOutlineSpaceDashboard />}>Dashboard</MenuItem>
                    <MenuItem icon={<MdOutlineSpaceDashboard />}>Make Ads</MenuItem>
                    <MenuItem icon={<MdOutlineSpaceDashboard />}>Edit Info</MenuItem>
                </Menu>
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