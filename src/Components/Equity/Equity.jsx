import React from 'react'
import './Equity.css'

const Equity = () => {
  return (
    <div className='equity-panel'>
      <div className='equity-container'>
        <div className="equity-textcomponent">
          <h3>DSU's commitment to an equitable and inclusive environment</h3>
          <h4>
            Delsco State University does not discriminate against any person on the basis of race, color, national origin, sex, gender identity or expression, sexual orientation, genetic information, marital status, disability, religion, age, veteran status or any other characteristic protected by applicable law in its employment, educational programs and activities, admissions policies, and scholarship and loan programs as required by Title IX of the Educational Amendments of 1972, the Americans with Disabilities Act of 1990, Section 504 of the Rehabilitation Act of 1973, Title VII of the Civil Rights Act of 1964, and other applicable statutes and University policies. DSU also prohibits unlawful harassment including sexual harassment and sexual violence.
          </h4>
          <div className='equity-link'>
            <h4>
            <button className='equity-button'><a href="#">Office of Equity & Inclusion &gt; </a></button>
            </h4>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Equity
