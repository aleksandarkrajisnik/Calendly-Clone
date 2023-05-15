import React from 'react'
import { servicesTabList, toCamelCase } from '../../utils';
import './ServicesNavigation.scss';

const ServicesNavigation = ({activeTab, setActiveTab}) => {

    //const tabAnimationDelays = [300, 400, 500, 600, 700, 800]

  return (
    <div 
        className="servicesNavigation" 
        data-aos='fade-up' 
        data-aos-duration={800} 
    >
        <div className={`servicesNavigationContent ${toCamelCase(activeTab)}`}>
            {servicesTabList.map((item, index) => 
                <div 
                    key={index} 
                    className={`tab ${activeTab === item.title ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.title)}
                    
                >
                    {item.icon}
                    <h4>{item.title}</h4>
                </div>
            )}
        </div>
    </div>
  )
}

export default ServicesNavigation