import React from 'react';

const Hamburger = ({handleToggle}) => {
  return (
    <div className='hamburger' onClick={handleToggle}>
      <span className='hamburger-bar'></span>
    </div>
  );
}

export default Hamburger;
