import React from 'react'
import './Parent.css'
import family from '../../assets/family.jpg'

const Parent = () => {
  return (
    <div className='parent-panel'>
      <div className='parent-container'>
        <div className="parent-row  parent-component">
          <div className="parent-column ">
            <h2>PARENTS AND FAMILY WEEKEND</h2>
            <h3>October 19 - October 22, 2024</h3>
            <h2>&nbsp;</h2>
            <p>The annual Parents and Family Weekend returns this fall, and provides families with an apportunity to visit their students, create life-long memories and participate in a wide variety of activities on campus.</p>
            <h4>&nbsp;</h4>
            <h4>
              <button  className='parent-button' type='button'>
                GET REGISTRATION AND TICKETING INFO &gt;
              </button>
            </h4>
          </div>
          <div className="parent-column">
            <img src={family} alt="" width='100%' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parent
