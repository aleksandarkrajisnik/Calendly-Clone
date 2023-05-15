import React from 'react'
import './Footer.scss'
import ContentBar from './components/contentBar/ContentBar'
import CopyrightBar from './components/copyrightBar/CopyrightBar'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="content">
            <div className="heading">
                <h1>Easy <span>ahead</span></h1>
                <p>Calendly is the Modern Scheduling Platform for high-performing teams</p>
            </div>
            <ContentBar/>
            <CopyrightBar/>
        </div>
    </div>
  )
}

export default Footer
