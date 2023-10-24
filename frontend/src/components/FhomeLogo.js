import React from 'react';
import Logo from '../assets/logoHome.png';
import MyHealth from '../assets/MyHealth.png';

function FhomeLogo() {
  return (
    <div className='flex'>
        <img className="w-[50px] h-[50px] mr-4" src={Logo} alt="Logo" />
        <img className="w-[200px] h-[50px]" src={MyHealth} alt="Logo" />
    </div>
    
  )
}

export default FhomeLogo;