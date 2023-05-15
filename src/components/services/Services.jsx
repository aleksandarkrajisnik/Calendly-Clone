import React, { useState } from 'react'
import './Services.scss'
import ServicesNavigation from './components/ServicesNavigation/ServicesNavigation'
import ServicesSlides from './components/ServicesSlides/ServicesSlides'

const Services = () => {

  const [activeTab, setActiveTab] = useState('Sales');

  return (
    <div className='services'>
        <div className="content">
            <h1 
              data-aos='fade-up' 
              data-aos-duration={800} 
              data-aos-offset={200}
            >
              Special features for teams who conduct meetings at scale
            </h1>
            <ServicesNavigation activeTab={activeTab} setActiveTab={(tabTitle) => setActiveTab(tabTitle)}/>
            <ServicesSlides activeTab={activeTab}/>
        </div>
    </div>
  )
}

export default Services