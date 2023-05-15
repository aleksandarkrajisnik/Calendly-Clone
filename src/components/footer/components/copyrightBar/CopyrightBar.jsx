import React from 'react'
import './CopyrightBar.scss'
import LanguageDropdown from '../../../languageDropdown/LanguageDropdown'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import { FiYoutube } from 'react-icons/fi'

const CopyrightBar = () => {
  return (
    <div className='copyrightBar'>
      <LanguageDropdown/>
      <p>Copyright Calendly 2023 / <span>Privacy</span> / <span>Terms and Conditions</span> / <span>Status</span> / <span>Security</span></p>
      
      <div className="social">
        <AiOutlineTwitter/>
        <FaFacebookF/>
        <BsInstagram/>
        <TfiLinkedin/>
        <FiYoutube/>
      </div>
    </div>
  )
}

export default CopyrightBar