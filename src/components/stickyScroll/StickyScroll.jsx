import React, { useRef } from 'react'
import './StickyScroll.scss'
import Button from '../button/Button'
import Image1 from '../../assets/images/png/carousel-1.png'
import Image2 from '../../assets/images/png/carousel-2.png'
import Image3 from '../../assets/images/png/carousel-3.png'
import { useInView, AnimatePresence, motion } from 'framer-motion'
import useWindowSize from '../../assets/hooks/useWindowSize'

const StickyScroll = () => {

  const windowSize = useWindowSize()

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const headingVisible = useInView(ref1)
  const firstParagraphVisible = useInView(ref2)

  const showFirstImage = headingVisible || firstParagraphVisible
  const showSecondImage = useInView(ref3)
  const showThirdImage = useInView(ref4)

  return (
    
      <div key='scroll' className='stickyScroll'>
        <div className="content">
           <h1 data-aos='fade-up' data-aos-offset={200} ref={ref1}>We make scheduling for you easier than ever</h1>

           <div className="stickyContainer">
            <div className="textSide">
              <div data-aos='fade-up' data-aos-offset={400} className="textSection">
                <h1>Share your Calendly availability with others</h1>
                <p ref={ref2}>Grow your business with scheduling automation. Simply email, text, or add your Calendly availability to your website
                   – and watch prospects and recruits book high-value meetings with you.</p>
                <Button arrow>Learn more</Button>

                {windowSize.width < 1000 && 
                  <div className="imageContainer">
                    <img src={Image1} alt="Email Embed" />
                  </div>
                }

              </div>
              <div className="textSection">
                <h1>Schedule as a team</h1>
                <p>Calendly adapts to both you and your team's scheduling preferences. Co-host a client call with a colleague,
                   email reminders and follow-ups, and integrate everything with your preferred software tools. </p>
                <Button animationRef={ref3} arrow>Learn more</Button>

                {windowSize.width < 1000 && 
                  <div className="imageContainer">
                    <img src={Image2} alt="Schedule as a team" />
                  </div>
                }
              </div>
              <div className="textSection">
                <h1>Hit your number</h1>
                <p>High-value meetings are the lifeblood of your business. Increase revenue, 
                  retain customers, and land recruits with the #1 scheduling automation platform. </p>
                <Button animationRef={ref4} arrow>Learn more</Button>

                {windowSize.width < 1000 && 
                  <div className="imageContainer">
                    <img src={Image3} alt="Increase in Retention and Revenue" />
                  </div>
                }
              </div>
            </div>
            {windowSize.width >= 1000 && <div className="imagesSide">
             <div data-aos='fade-up' data-aos-offset={400} data-aos-delay={300} className="imageSection"  >
             <AnimatePresence mode='wait'>
                {showFirstImage && !showSecondImage && !showThirdImage &&
                  <motion.img 
                    key='image1'
                    src={Image1} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: { duration: 0.2 }}}
                    exit={{opacity: 0, transition: { duration: 0.2 }}}
                  />
                }
                {showSecondImage && !showThirdImage &&
                  <motion.img 
                    key='image2'
                    src={Image2} 
                    initial={{opacity:0}}
                    animate={{opacity:1, transition: {duration:0.2}}}
                    exit={{opacity:0, transition: {duration:0.2}}}
                  />
                }
                {showThirdImage &&
                  <motion.img 
                    key='image3'
                    src={Image3} 
                    initial={{opacity:0}}
                    animate={{opacity:1, transition: {duration:0.2}}}
                    exit={{opacity:0, transition: {duration:0.2}}}
                  />
                }
              </AnimatePresence>
              </div>
            </div>}
           </div>
        </div>
      </div>
    
  )
}

export default StickyScroll