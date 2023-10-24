import React from 'react'

function SpecialCard(props) {

    const imgUrl = props.imgUrl;
    const title = props.title;
  return (
    <div className=' h-[179px] rounded-lg bg-white'>
        <img className='rounded-xl z-10' src={imgUrl}></img>
        <div className='relative bottom-1'>
            <h1 className='bg-pink-500 text-white text-lg font-semibold z-20  '>{title}</h1>
        </div>
    </div>
  )
}

export default SpecialCard