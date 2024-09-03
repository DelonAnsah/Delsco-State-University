import React from 'react'
import './OpenHouse.css'
import openhouse1 from '../../assets/Gallery_6.jpg'
import openhouse2 from '../../assets/Gallery_3.jpg'

const OpenHouse = () => {
  return (
    <>
    <div className='openHouse-panel'>
      <div className='container'>
        <div className='text-component' >
          <h2 style={{textAlign: 'center'}}> 
            <span className='first-heading'>JOIN US FOR GREEN AND GOLDEN OPEN HOUSE</span>
          </h2>
          <h4 className='second-heading'>Visit our campus and picture yourself as a proud Green Tiger</h4>
          <h4 className='third-heading'>Register for our Green and Golden open house to hear from faculty representing 150+ majors, explore life on campus and speak to staff from admissions, study abroad, Honors College <b>-</b>and more!  </h4>
        </div>
        <div className='row'>
          <div className='column'>
            <img className='image' width='100%' height='70%' src={openhouse1} alt="" />
          </div>
          <div className='column'>
            <img className='image' width='100%' height='70%' src={openhouse2}alt="" />
          </div>
          <div className='column'>
            <p className='fouth-heading'>Our first <span className='font-change'>Green and Golden </span>open house is on Saturday, November 2, 2024 at 7:30 AM until 4:00 PM.
            </p>
            <div className='button-links'>
              <h3>
                <a className='link' href="">VIEW AGENDA &#9654; </a>
              </h3>
            </div>
            <div className='button-links'>
              <h3>
                <a className='link' href="">REGISTER &#9654; </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     
    </>
   
  )
}

export default OpenHouse
