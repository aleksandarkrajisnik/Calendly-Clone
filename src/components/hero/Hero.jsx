import React from 'react';
import './Hero.scss';
import HeroImage from '../../assets/images/png/homepage-hero.png';
import Button from '../button/Button';
import useWindowSize from '../../assets/hooks/useWindowSize';

const Hero = () => {

  const windowSize = useWindowSize();

  return (
    <div className="hero">
        <div className="content">
            <div className="heroText">
                {windowSize.width > 1000 ? 
                    <h1>Easy <br /> scheduling <br /> <span>ahead</span></h1> 
                        :
                    <h1>Easy scheduling <span>ahead</span></h1>
                }
                <p>
                    Calendly is your scheduling automation platform 
                    for eliminating the back-and-forth emails for 
                    finding the perfect time — and so much more.
                </p>
                <div className="signUpContainer">
                    <input type="text" placeholder='Enter your email'/>
                    <Button style={{width: '24%', fontSize:'17px'}}>Sign up</Button>
                </div>
                <span className='signUpLabel'>Create your free account. No credit card required.</span>
            </div>
            <div className="heroImage">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero