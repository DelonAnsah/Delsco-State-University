import React from 'react'
import './OpenHouse.css'
import openhouse1 from '../../assets/Gallery_9.jpg'
import openhouse2 from '../../assets/OpenHouseimage_2.jpg'

const OpenHouse = () => {
  return (
    <>
    <div className='openHouse-panel'>
      <div className='container'>
        <div className='text-component1' >
          <h2 style={{textAlign: 'center'}}> 
            <span className='first-heading'>Join Us For Green And Golden Open House</span>
          </h2>
          <h4 style={{padding: '0px'}}>
           <span>&nbsp;</span> 
          </h4 >
          <h4>
            <span style={{color: 'rgba(255, 255, 255)'}}>Visit our campus and picture yourself as a proud Green Laten</span>
          </h4>
          <h4 style={{padding: '0px'}}>
           <span>&nbsp;</span> 
          </h4 >
          <h4>
            <span style={{color: 'rgba(255, 255, 255)'}}> Register for our Green and Golden open house to hear from faculty representing 150+ majors, explore life on campus and speak to staff from admissions, study abroad, Honors College—and more! &nbsp; </span>
          </h4>
        </div>
        <div className='row'>
          <div className='column'>
            <img className='image'  src={openhouse1} alt="DSU Building" loading='lazy'/>
          </div>
          <div className='column'>
            <img className='image'  src={openhouse2}alt="DSU students after Class " loading='lazy' />
          </div>
          <div className='column3'>
            <p className='fouth-heading'>Our first <span className='font-change'>Green and Golden </span>open house is on Saturday, November 2, 2024 at 7:30 AM until 4:00 PM.
            </p>
            <div className="buttonlinks-container">
            <div className='button-links'>
              <h3>
                <a className='link' href="">VIEW AGENDA &gt; </a>
              </h3>
            </div>
            <div className='button-links'>
              <h3>
                <a className='link' href="">REGISTER &gt; </a>
              </h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     
    </>
   
  )
}

export default OpenHouse
