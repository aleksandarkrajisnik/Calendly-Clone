import React from 'react'
import './Testimony.scss'
import ChrisWilliams from '../../assets/images/png/chris-williams.png'
import Vonage from '../../assets/images/logos/vonage-logo.svg'
import Button from '../button/Button'
import useWindowSize from '../../assets/hooks/useWindowSize'

const Testimony = () => {

  const windowSize = useWindowSize()

  return (
    <div className='testimony'>
      <div className="content">
        <div 
          className="testimonyImage"
          data-aos='fade-up' 
          data-aos-duration={500} 
          data-aos-offset={300} 
        >
          <img src={ChrisWilliams} alt="Chris Williams, Head of Customer Success" />
        </div>

        <div 
          className="testimonyText"
          data-aos={windowSize.width > 500 ? 'fade-up' : ''}
          data-aos-duration={500} 
          data-aos-offset={windowSize.height - (3.75 * windowSize.height) / 10} 
        >
          <p>“Calendly has increased meetings with customers by 216% for our Vonage team.”</p>
          <img src={Vonage} alt="Vonage" />
          <h3>Chris Williams</h3>
          <h5>Head of Customer Success UK/EMEA</h5>
          <Button arrow>
            Read more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Testimony