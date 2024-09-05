import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OpenHouse from './Components/Open House/OpenHouse'
import SchoolRank from './Components/School Rank/SchoolRank'
import Visit from './Components/Visit/Visit'
import Parent from './Components/Parent/Parent'
import News from './Components/News/News'

const App = () => {
  return (
    <div>

      <Header/>
      <Navbar/>
      <Hero/>
      <OpenHouse/>
      <SchoolRank/>
      <Visit/>
      <Parent/>
      <News/>

    </div>
  )
}

export default App
