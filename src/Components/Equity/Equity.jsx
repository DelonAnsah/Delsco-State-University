import React from 'react'
import './Equity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

const Equity = () => {
  return (
    <div className='equity-panel'>
      <div className='equity-container'>
        <div className="equity-textcomponent">
          <h3>DSU's commitment to an equitable and inclusive environment</h3>
          <p>
            Delsco State University  is committed to fostering an inclusive and equitable environment where all individuals are treated with dignity and respect. We do not discriminate on the basis of race, color, ethnicity, national origin, sex, gender identity or expression, sexual orientation, genetic information, marital status, disability, religion, age, veteran status, or any other characteristic protected by law. This commitment applies to all aspects of university life, including employment, educational programs, admissions policies, and scholarship and loan programs, in accordance with Title IX of the Education Amendments of 1972, the Americans with Disabilities Act of 1990, Section 504 of the Rehabilitation Act of 1973, Title VII of the Civil Rights Act of 1964, and other applicable laws and university policies. Delsco State University also strictly prohibits any form of unlawful harassment, including sexual harassment and violence.
          </p>
          <div className='equity-link'>
            <h4>
            <button className='equity-button' role='button'>
              <a href="#">Office of Equity & Inclusion <FontAwesomeIcon icon={ faAngleRight }/></a></button>
            </h4>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Equity
