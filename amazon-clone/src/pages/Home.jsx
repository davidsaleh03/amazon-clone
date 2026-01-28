import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import UpperBanner from '../components/UpperBanner'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="home__top">
        <UpperBanner className='upper-banner'/>
        </div>
    </div>
  )
}

export default Home