import React from 'react'
import './MiddleBanners.css'
import productInventory from "../assets/products.js";

const MiddleBanners = ({title, id}) => {
  return (
    <div className='MiddleBanners'>
        <div className="middle-top__title">
        <h1 className="banner-title">{title}</h1>
        </div>
        <div className="product__display--section">
            {
                productInventory.products
                .filter((product)=> 
                    product.id === id
                )
                .slice(0,10)
                .map((product) => {
                    return <div className="acutal__product">
                        <img src={product.photos.img1} alt="" />
                    </div>
                })
            }
        </div>
        <h1 className="banner-title2">See More</h1>
    </div>
  )
}

export default MiddleBanners