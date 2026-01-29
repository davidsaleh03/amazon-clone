import React from 'react'
import './MiddleBanners.css'

const MiddleBanners = ({title}) => {
  return (
    <div className='MiddleBanners'>
        <h1 className="banner-title">{title}</h1>
        <h1 className="banner-title">See More</h1>
    </div>
  )
}

export default MiddleBanners