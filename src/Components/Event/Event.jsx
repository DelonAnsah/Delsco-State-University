import React from 'react'
import './Event.css'
import eventimage from '../../assets/About.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Event = () => {
  return (
    <div className='event-panel'>
      <div className="event-container">
        <div className="event-row">
          <div className="event-leftcolumn">
            <div className="event-text">
              <h2>Campus Events</h2>
              <div className='events-widget'>
                <div className='calender-container'>
                  <ul className='event-list'>
                    <li className='event-item'>
                      <div className='icon-col'>
                        <a href="#">
                         <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/>
                        </a>
                      </div>
                      <div className='event-details'>
                        <span >Oct 1, 2024 10am </span>
                        <br />
                        <a className='event' href="">
                          Homecoming Week Kickoff
                        </a>
                      </div>
                    </li>
                    <li className='event-item'>
                      <div className='icon-col icon'>
                        <a href="#">
                          <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/>
                        </a>
                      </div>
                      <div className='event-details more'>
                        <span>Oct 5, 2024 2pm </span>
                        <br />
                        <a href="#">
                          Guest Lecture: The Future of AI
                        </a>
                      </div>
                    </li>
                    <li className='event-item'>
                      <div className='icon-col'>
                        <a href="#">
                          <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/>
                        </a>
                      </div>
                      <div className='event-details'>
                        <span>Oct 12, 2024 9pm </span>
                        <br />
                        <a href="#">
                          Alumni Networking Dinner
                        </a>
                      </div>
                    </li>
                    <li className='event-item'>
                      <div className='icon-col icon'>
                        <a  href="#">
                          <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/>
                        </a>
                      </div>
                      <div className='event-details more'>
                        <span>Oct 19, 2024 1pm </span>
                        <br />
                        <a href="#">
                          Parent and Family Weekend
                        </a>
                      </div>
                    </li>
                    <li className='event-item'>
                      <div className='icon-col'>
                        <a href="#">
                         <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/>
                        </a>
                      </div>
                      <div className='event-details '>
                        <span>Oct 31, 2024 3pm </span>
                        <br />
                        <a href="#">
                          Fall Music Festival
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='events-calendar'>
              <h3>
                <a href="#"> <FontAwesomeIcon className='fa-calendar' icon={ faCalendarAlt }/> Events Calendar &gt; </a>
              </h3>
            </div>
          </div>
          <div className="event-rightcolumn">
            <img src={eventimage} alt="Calender-icon" width='100%' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
