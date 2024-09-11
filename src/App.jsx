import React from 'react'
import Hero from './Components/Hero/Hero'
import OpenHouse from './Components/Open House/OpenHouse'
import SchoolRank from './Components/School Rank/SchoolRank'
import Visit from './Components/Visit/Visit'
import Parent from './Components/Parent/Parent'
import News from './Components/News/News'
import Event from './Components/Event/Event'
import Equity from './Components/Equity/Equity'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div className='main-container'>
      <div className='main-header'>
      <Header/>
      </div>
      <Hero/>
      <OpenHouse/>
      <SchoolRank/>
      <Visit/>
      <Parent/>
      <News/>
      <Event/>
      <Equity/>
      <Footer/>
    </div>
  )
}

export default App
