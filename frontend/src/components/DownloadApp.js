import React from 'react';
import phone from '../assets/phone.png';
import GooglePlay from '../assets/GooglePlay.png';
import AppleStore from '../assets/AppleStore.png';

function DownloadApp() {
  return (
    <div className=' flex bg-emerald-900 rounded-xl px-12 py-12 mt-28 '>
        {/* phone image -left column */}
        <div className='ml-28 my-6'>
            <img src={phone} alt='phone'/>
        </div>

        {/* download app - right column */}
        <div className='ml-28 my-6 '>

            <h1 className=' text-white text-6xl font-semibold mb-5 '>DownloadApp</h1>
            <h1 className=' text-white text-5xl mb-5'>For Better Health Care Download Mobile App</h1>

            <h1 className='text-white text-2xl my-14'>Appointment Booking, Online Consultation,<br/>and maintaining electronic medical records made easy.</h1>

            <h1 className='text-white text-2xl mb-8'> Download the Health App NOW!</h1>

            {/* download buttons */}
            <div className='flex justify-evenly'>
                <img src={GooglePlay} alt='GooglePlay'/>
                <img src={AppleStore} alt='AppleStore'/>
                </div>
        </div>
    </div>
  )
}

export default DownloadApp;