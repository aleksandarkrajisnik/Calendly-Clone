import React from 'react'
import './Integrations.scss'
import Button from '../button/Button'
import IntegrationsImage from '../../assets/images/png/integrations.png'

const Integrations = () => {
  return (
    <div className='integrations'>
        <div className="content">
            <div 
              className="integrationsText"
              data-aos='fade-up'
              data-aos-duration={800}
              data-aos-delay={300}
            >
                <h1>Integrations and Extensions</h1>
                <p>Boost productivity with integrations that fold right into your workflow.</p>
                <Button style={{fontSize:'17px', padding:'13px 20px'}}>Explore integrations</Button>
            </div>

            <div
              className="integrationsImage" 
              data-aos='fade-up'
              data-aos-duration={800}
            >
                <img src={IntegrationsImage} alt="Integrations"/>
            </div>
        </div>
    </div>
  )
}

export default Integrations