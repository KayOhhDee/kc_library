import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { sidebarToggleContext } from "../context/SidebarToggleProvider";

export default function SideBarItem({ name, icon, path }) {
  let match = useRouteMatch({
    path,
    exact: true,
  });
    
  const { handleToggle } = useContext(sidebarToggleContext);
  return (
    <Link onClick={handleToggle} to={path || ""} className={`sidebar-item ${match ? "active" : ""}`}>
      <span className="sidebar-item__icon">
        <i className={icon}></i>
      </span>
      <span className="sidebar-item__name">{name}</span>
    </Link>
  );
}
