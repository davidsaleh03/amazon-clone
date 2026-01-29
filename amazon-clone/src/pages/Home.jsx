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
            <MiddleBanners title='Amazon Basics'/>
            <MiddleBanners title='Home Decor'/>
            <MiddleBanners title='Kitchen'/>
            <MiddleBanners title='Electronics'/>
            <MiddleBanners title='Books'/>
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