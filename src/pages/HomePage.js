import React from 'react'
import Header from '../components/HomeComponent/Header/Header'
import Hero from '../components/HomeComponent/Hero/Hero'
import Intro from '../components/HomeComponent/Intro/Intro'
import PathWay from '../components/HomeComponent/PathWay/PathWay'
import Testimonies from '../components/HomeComponent/Testimonies/Teatimonies'
import Mentorship from '../components/HomeComponent/Mentorship/Mentorship'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Intro/>
        <PathWay/>
        <Testimonies/>
        <Mentorship/>
    </div>
  )
}

export default HomePage
