import React from 'react'

function WhyChoseCard(props) {

    const imgUrl = props.imgUrl;
    const title = props.title;
  return (
    <div>
        <img src={imgUrl} alt="no internet" />
        <h1 className=' text-emerald-500 text-3xl font-semibold mt-5' >{title}</h1>
    </div>
  )
}

export default WhyChoseCard;