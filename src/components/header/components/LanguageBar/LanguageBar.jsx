import React from 'react'
import './LanguageBar.scss'
import LanguageDropdown from '../../../languageDropdown/LanguageDropdown';

const LanguageBar = () => {
  return (
    <div className='languageBar'>
       <div className="languageBarContent">
        <LanguageDropdown/>
       </div>
    </div>
  )
}

export default LanguageBar