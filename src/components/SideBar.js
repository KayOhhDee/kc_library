import React, {useContext} from 'react';
import SideBarTitle from './SideBarTitle';
import SideBarItem from './SideBarItem';
import { sidebarToggleContext } from '../context/SidebarToggleProvider';

export default function SideBar() {
  const {toggle} = useContext(sidebarToggleContext);


  return (
    <>
      <div className={`sidebar-overlay ${toggle ? "remove-overlay" : ""}`}></div>
      <div className={`sidebar ${toggle ? "close-sidebar" : ""}`}>
        <div className="sidebar-top">
          <SideBarTitle />
          <SideBarItem name="Home" icon="fas fa-home" path="/" link/>
          <SideBarItem name="Publishers" icon="fas fa-user" path="/publishers" link/>
        </div>
        <div className="sidebar-footer">
          <SideBarItem name="Settings" icon="fas fa-cog" />
        </div>
      </div>
    </>
  );
}
