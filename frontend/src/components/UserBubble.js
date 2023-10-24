import React from 'react';
import Dellipse from '../assets/DEllipse.png';
import Lellipse from '../assets/LEllipse 11.png';

function UserBubble(props) {
   const userImg=props.userImg;
   const HelloUserName=props.HelloUserName;
  return (
    <div>
            <img className="absolute top-0 right-0 z-0 " src={Dellipse} alt="Dellipse" />
            <img className="absolute top-0 right-0 z-0" src={Lellipse} alt="Lellipse" />
            <div className="flex  ml-[1300px] items-center relative z-10">
                <h1 className="text-4xl font-semibold">{HelloUserName}</h1>
                <img className="w-[100px] h-[100px] ml-4" src={userImg} />
            </div>
    </div>
  )
}

export default UserBubble;