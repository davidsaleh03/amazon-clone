import React from "react";
import "./LoadingMiddleBanners.css";

const LoadingMiddleBanners = () => {
  return (
    <div className="MiddleBanners banner-2">
      <div className="middle-top__title">
        <div className="banner-title--2 shimmer"></div>
      </div>
      <div className="product__display--section section-34">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => {
          return <div className="acutal__product shimmer"></div>;
        })}
      </div>
      <div className="banner-title2--2 shimmer"></div>
    </div>
  );
};

export default LoadingMiddleBanners;
