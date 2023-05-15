import React from 'react'
import './Customers.scss'
import Ebay from '../../assets/images/logos/ebay-logo.svg';
import Zenefits from '../../assets/images/logos/zenefits-logo.svg';
import Compass from '../../assets/images/logos/compass-logo.svg';
import Twilio from '../../assets/images/logos/twilio-logo.svg';
import Dropbox from '../../assets/images/logos/dropbox-logo.svg';

const Customers = () => {
  return (
    <div className='customers'>
        <div className="content">
            <div className="heading">
                <h2 
                    data-aos='fade-up' 
                    data-aos-duration={800} 
                    data-aos-offset={200}
                >
                    Simplified scheduling for more than <span>10,000,000</span> users worldwide
                </h2>
            </div>

            <div className="customerBrandLogos">
                <div data-aos='fade-up' data-aos-delay={300} className="brandLogo ebay"><img src={Ebay} alt="ebay"/></div>
                <div data-aos='fade-up' data-aos-delay={400} className="brandLogo zenefits"><img src={Zenefits} alt="zenefits"/></div>
                <div data-aos='fade-up' data-aos-delay={500} className="brandLogo compass"><img src={Compass} alt="compass"/></div>
                <div data-aos='fade-up' data-aos-delay={600} className="brandLogo twilio"><img src={Twilio} alt="twilio"/></div>
                <div data-aos='fade-up' data-aos-delay={700} className="brandLogo dropbox"><img src={Dropbox} alt="dropbox"/></div>
            </div>
        </div>
    </div>
  )
}

export default Customers