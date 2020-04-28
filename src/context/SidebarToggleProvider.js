import React, {createContext, useState} from 'react';

export const sidebarToggleContext = createContext();

const SidebarToggleProvider = (props) => {
  const [toggle, setToggle] = useState("true");

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <sidebarToggleContext.Provider value={{toggle, handleToggle}}>
      {props.children}
    </sidebarToggleContext.Provider>
  );
}

export default SidebarToggleProvider;
