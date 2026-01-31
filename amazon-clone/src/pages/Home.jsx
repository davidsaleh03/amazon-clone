import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import UpperBanner from '../components/UpperBanner'
import MiddleBanners from '../components/MiddleBanners'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="home__top">
        <UpperBanner className='upper-banner'/>
        </div>
        <div className="home__middle">
            <MiddleBanners id='amazonbasics' title='Amazon Basics'/>
            <MiddleBanners id='homedecor' title='Home Decor'/>
            <MiddleBanners id='kitchen' title='Kitchen'/>
            <MiddleBanners id='electronics' title='Electronics'/>
            <MiddleBanners id='book' title='Books'/>
        </div>
        <div className="home__middle--low">
            <h1 className="low__title">See Personalized Reccomendations</h1>
            <button className="low__btn">Sign In</button>
        </div>
        <Footer />
    </div>
  )
}

export default Home