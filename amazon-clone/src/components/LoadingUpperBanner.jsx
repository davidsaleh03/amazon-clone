import React from 'react'
import './LoadingUpperBanner.css'
import { useEffect, useState } from "react";



const LoadingUpperBanner = () => {
    
  return (
    <div className="topbanner">
      <div className="UpperBanner">
        <div
          className="upperbanner__track"
        >
              <div className="upperbanner__slide">
                <div className="upperbanner__slide-2 light-shimmer"></div>
              </div>
        </div>
      </div>
      <div className="topmodules">
        <div className="module on__sale">
          <div className="module__title--2 shimmer"></div>
          <div className="module__content content-22">
            {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div className="figure__bestimg img-22 shimmer" key={i}></div>
                );
              })}
          </div>
          <div className="module__footer--2 shimmer"></div>
        </div>
        <div className="module high__rated">
          <div className="module__title--2 shimmer"></div>
          <div className="module__content content-22">
            {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div className="figure__bestimg img-22 shimmer" key={i}></div>
                );
              })}
          </div>
          <div className="module__footer--2 shimmer"></div>
        </div>
        <div className="module lowest__price">
         <div className="module__title--2 shimmer"></div>
          <div className="module__content content-22">
            {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div className="figure__bestimg img-22 shimmer" key={i}></div>
                );
              })}
          </div>
          <div className="module__footer--2 shimmer"></div>
        </div>
        <div className="module module__last continue__shopping">
            <div className="module__title--2 shimmer"></div>
          <div className="module__content content-22">
            {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div className="figure__bestimg img-22 shimmer" key={i}></div>
                );
              })}
          </div>
          <div className="module__footer--2 shimmer"></div>
          </div>
        </div>
    </div>
  )
}

export default LoadingUpperBanner