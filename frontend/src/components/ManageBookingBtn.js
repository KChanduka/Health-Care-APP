import React from 'react';
import { Link } from 'react-router-dom';

function ManageBookingBtn() {
  return (
    <div className=' flex'>
        <Link to={"/Channel"}>
            <button className='bg-my-custom-color text-white p-6 text-xl rounded-3xl'>Manage Bookings
            </button>
        </Link>
    </div>
  )
}

export default ManageBookingBtn