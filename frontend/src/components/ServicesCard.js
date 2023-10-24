import React from 'react'

function ServicesCard(props) {

    const imgUrl = props.imgUrl;
  return (
    <div>
        <div>
            <img src={imgUrl} alt="services" />
        </div>
    </div>
  )
}

export default ServicesCard;