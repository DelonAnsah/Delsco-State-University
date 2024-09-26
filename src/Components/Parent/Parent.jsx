import React from 'react'
import './Parent.css'
import family from '../../assets/family.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

const Parent = () => {
  return (
    <div className='parent-panel'>
      <div className='parent-container'>
        <div className="parent-row  parent-component">
          <div className="parent-column ">
            <h2>Parents And Family Weekend</h2>
            <h3>October 19 - October 22, 2024</h3>
            <br />
            <h4 className='parent-h'>Delsco State University is excited to welcome families back to campus this fall for our annual Parents and Family Weekend! This cherished tradition offers a special opportunity for families to reconnect with their students, engage in memorable experiences, and enjoy a diverse range of activities that showcase the vibrant DSU community. </h4>
            <br />
            <h4>
              <button  className='parent-button' type='button'>
                GET REGISTRATION AND TICKETING INFO <FontAwesomeIcon icon={ faAngleRight }/>
              </button>
            </h4>
          </div>
          <div className="parent-column parent-image">
            <img src={family} alt="Family reunion during Parents and Family Weekend" loading='lazy'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parent
