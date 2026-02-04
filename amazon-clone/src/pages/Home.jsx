import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import UpperBanner from '../components/UpperBanner'
import MiddleBanners from '../components/MiddleBanners'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import LoadingUpperBanner from '../components/LoadingUpperBanner'
import LoadingMiddleBanners from '../components/LoadingMiddleBanners'

const Home = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className='home'>
        <div className="home__top">
          {
            loading ? <LoadingUpperBanner /> : <UpperBanner className='upper-banner'/>
          }
        </div>
        <div className="home__middle">
          {
            loading ?
            <>
              <LoadingMiddleBanners />
              <LoadingMiddleBanners />
              <LoadingMiddleBanners />
              <LoadingMiddleBanners />
              <LoadingMiddleBanners />
            </>
            :
            <>
            <MiddleBanners id='amazonbasics' title='Amazon Basics'/>
            <MiddleBanners id='homedecor' title='Home Decor'/>
            <MiddleBanners id='kitchen' title='Kitchen'/>
            <MiddleBanners id='electronics' title='Electronics'/>
            <MiddleBanners id='books' title='Books'/>
            </>
            
          }
        </div>
        <div className="home__middle--low">
            <h1 className="low__title">See Personalized Reccomendations</h1>
            <button className="low__btn">Sign In</button>
        </div>
    </div>
  )
}

export default Home