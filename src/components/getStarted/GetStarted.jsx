import React from 'react'
import './GetStarted.scss'
import Button from '../button/Button'

const GetStarted = () => {
  return (
    <div 
        className='getStarted'
        data-aos='fade-up'
        data-aos-duration={800}
    >
        <h1>Get started in seconds</h1>
        <div className="buttons">
            <Button 
                style={{
                    marginRight:'15px', fontSize:'17px', padding:'13px 20px'
                }}>
                    Sign up for free
            </Button>
            <Button
             outlined
             style={{
                marginRight:'20px', fontSize:'17px', padding:'13px 20px'
            }}>
                Talk to sales
            </Button>
        </div>
    </div>
  )
}

export default GetStarted