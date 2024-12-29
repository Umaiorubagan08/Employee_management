import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../lib/consts/navigation";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            {/* Header */}
            <div className="sidebar-header">
                <FcBusinessman className="sidebar-logo" />
                <span className="sidebar-title"> EmpHub </span>
            </div>

            {/* Main Links */}
            <div className="sidebar-links">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>

            {/* Bottom Links */}
            <div className="sidebar-bottom-links">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}

                {/* Logout */}
                <Link to="/logout" className="sidebar-logout">
                    <HiOutlineLogout className="sidebar-icon" />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={item.path}
            className={`sidebar-link ${pathname === item.path ? "active" : ""}`}
        >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
        </Link>
    );
}
