import React from "react";
import "./LoadingProductPage.css";

const LoadingProductPage = () => {
  return (
    <div className="product__page--details">
      <div className="details__left">
        <div className='details--title--2 shimmer'></div>
        <div className="details__photo--actual">
        <div className="details__photo--actual--2 shimmer"></div>
        </div>
        <div className="details__photos--array">
          {[1, 2, 3, 4].map((_, i) => {
            return (
              <div className="photos__array--actual shimmer" key={i}></div>
            );
          })}
        </div>
      </div>
      <div className="details__middle">
        <div className="details__middle--top top-1">
          <div className="details__title--2 shimmer"></div>

          <div className="details__link--2 shimmer"></div>

          <div className="details__rating--2 shimmer"></div>
          <div className="details__price--2 shimmer"></div>
        </div>
        <div className="details__middle--top top-2">
          <div className="ratings-2">
            <div className="details__title--2 shimmer"></div>
            <div className="details__link--2 shimmer"></div>
            <div className="details__rating--2 shimmer"></div>
          </div>
          <div className="details__price--2 shimmer"></div>
        </div>
        <div className="new__middle">
          <div className="details__right--container new-2">
            <div>
              <div className="details__status--2 shimmer"></div>
              <div className="right__price--2 shimmer"></div>
              <div className="right__shipping--2 shimmer"></div>
              <div className="right__shipping--location--2 shimmer"></div>
              <div className="details__amount--2 shimmer"></div>
              <div className="details__btn--2 shimmer"></div>
            </div>
            <div>
              <div className="right__seller--2 shimmer"></div>
              <div className="right__returns--2 shimmer"></div>
              <div className="right__payment--2 shimmer"></div>
            </div>
          </div>
        </div>
        <div className="details__middle--bottom">
          <div className="details__bottom--title--2 shimmer"></div>
          <div className="description__list">
            {[1, 2, 3, 4].map((_, i) => {
                  return (
                    <div className="description__list--item--2 shimmer" key={i}>

                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      <div className="details__right">
        <div className="details__right--container">
          <div className="details__status--2 shimmer"></div>
          <div className="right__price--2 shimmer"></div>
          <div className="right__shipping--2 shimmer"></div>
          <div className="right__shipping--location--2 shimmer"></div>
          <div className="details__amount--2 shimmer"></div>
          <div className="details__btn--2 shimmer"></div>

          <div className="right__seller--2 shimmer"></div>
          <div className="right__returns--2 shimmer"></div>
          <div className="right__payment--2 shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductPage;
