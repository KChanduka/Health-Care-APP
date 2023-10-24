import React from 'react';
import Logo from '../assets/logoHome.png';
import MyHealth from '../assets/MyHealth.png';

function HomeLogo() {
  return (
    <div className='flex'>
        <img className="w-[100px] mr-4" src={Logo} alt="Logo" />
        <img className="w-[300px] h-[100px]" src={MyHealth} alt="Logo" />
    </div>
  )
}

export default HomeLogo;