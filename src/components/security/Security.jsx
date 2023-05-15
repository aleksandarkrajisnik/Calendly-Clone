import React from 'react'
import './Security.scss'
import { BsCheck2 } from 'react-icons/bs'
import SecurityImage from '../../assets/images/png/security.png'

const Security = () => {
  return (
    <div className='security'>
        <div className="content">
            <div 
                className="securityImage"
                data-aos='fade-up'
                data-aos-duration={800}
            >
                <img src={SecurityImage} alt="Secure IT Certifications" />
            </div>

            <div 
                className="securityText"
                data-aos='fade-up'
                data-aos-duration={800}
                data-aos-delay={300}
            >
                <h1>Make your IT team feel secure and safe</h1>
                <div className="textSection">
                    <BsCheck2/>
                    <div className="text">
                        <h3>Centralize billing</h3>
                        <p>Hundreds of coworkers use Calendly – bring them all together in one secure, managed account.</p> 
                    </div>
                </div>
                <div className="textSection">
                    <BsCheck2/>
                    <div className="text">
                        <h3>Secure your Calendly usage</h3>
                        <p>Single-sign-on, SCIM, and more make it easy to onboard/offboard users, mandate passwords, and more.</p>
                    </div>
                </div>
                <div className="textSection">
                    <BsCheck2/>
                    <div className="text">
                        <h3>Standardize how your teams use Calendly</h3>
                        <p>Manage how your coworkers create meeting types, send consistent reminders, and adhere to brand standards.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Security