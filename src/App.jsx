import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OpenHouse from './Components/Open House/OpenHouse'
import SchoolRank from './Components/School Rank/SchoolRank'
import Visit from './Components/Visit/Visit'
import Parent from './Components/Parent/Parent'

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
    </div>
  )
}

export default App
