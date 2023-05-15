import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { languageDropdownList } from '../header/components/LanguageBar/utils'; 
import './LanguageDropdown.scss'

const LanguageDropdown = () => {

  const [languageBarHovered, setLanguageBarHovered] = useState(false);

  return (
    
    <div 
      className="languageDropdownTrigger"
      onMouseEnter={() => setLanguageBarHovered(true)}
      onMouseLeave={() => setLanguageBarHovered(false)}
    >
      <CiGlobe className='globe'/>
      <span>English</span>
      {languageBarHovered ? <RiArrowUpSLine className='arrow'/> : <RiArrowDownSLine className='arrow'/>}
      {languageBarHovered && 
        <div className="languageDropdown">
          {languageDropdownList.map(item => (
              <div key={item} className={`languageBox ${item === 'English' && 'active'}`}>
                  <span>{item}</span>
                  {item === 'English' && <FaCheck/>}
              </div>
          ))}
        </div>
      }
    </div>
  )
}

export default LanguageDropdown