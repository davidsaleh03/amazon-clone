import React from 'react'
import './LoadingProductsAct.css'

const LoadingProductsAct = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
        return (
            <div className="individual__product" key={i}>
              <div className="product__img--2 shimmer">
                
              </div>
              <div className="product__info info-2">
                <div className="productAct__title--2 h1 shimmer"></div>
                <div className="product__rating--2 h1 shimmer">
                </div>
                <div className="product__price--2 h1 shimmer"></div>
                <div className="product__delivery--2 h1 shimmer"></div>
              </div>

              <div className="add__cart--2 shimmer" ></div>
            </div>
        );
      })}
    </>
  )
}

export default LoadingProductsAct