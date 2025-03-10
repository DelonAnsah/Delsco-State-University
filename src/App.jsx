import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OpenHouse from './Components/Open House/OpenHouse'
import SchoolRank from './Components/School Rank/SchoolRank'
import Visit from './Components/Visit/Visit'
import Parent from './Components/Parent/Parent'
import News from './Components/News/News'
import Event from './Components/Event/Event'
import Equity from './Components/Equity/Equity'
import Footer from './Components/Footer/Footer'


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='main-header'>
      <Header/>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
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
