import React, {useContext} from 'react';
import { sidebarToggleContext } from '../context/SidebarToggleProvider';

const SideBarTitle = () => {
  const {handleToggle} = useContext(sidebarToggleContext);
  return (
    <div className='sidebar-title'>
      <div>Kumasi Congregation</div>
      <div className="close-button" onClick={handleToggle}>
        <span className="close-button__bar"></span>
      </div>
    </div>
  );
}

export default SideBarTitle;
