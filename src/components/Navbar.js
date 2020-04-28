import React, { useContext } from "react";
import { sidebarToggleContext } from "../context/SidebarToggleProvider";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const { handleToggle } = useContext(sidebarToggleContext);

  const pathName = (path) => {
    if (path !== "/") {
      return path.substring(1);
    }
    return "home";
  };

  return (
    <nav className="navbar">
      <Hamburger handleToggle={handleToggle} />{" "}
      <div className="navbar-pathname">{pathName(window.location.pathname)}</div>
    </nav>
  );
}
