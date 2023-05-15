import React, { useEffect, useState } from 'react'
import './SchedulingShowcase.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { showcaseImages, showcaseTitles } from './utils'
import useWindowSize from '../../assets/hooks/useWindowSize'

const SchedulingShowcase = () => {

    const [slideCounter, setSlideCounter] = useState(0);
    const [loaderWidth, setLoaderWidth] = useState(0);
    
    const windowSize = useWindowSize()

    useEffect(() => {
      setLoaderWidth(0)
      const slideTimer = setTimeout(() => slideCounter === 3 ? setSlideCounter(0) : setSlideCounter(prevValue => prevValue + 1), 7500);
      const loaderTimer = setInterval(() => {
        setLoaderWidth(prevValue => prevValue + 25)
      }, 1500);
      return () => {
        clearTimeout(slideTimer)
        clearInterval(loaderTimer)
      };
    }, [slideCounter])

  return (
    <AnimatePresence>
      <div className='schedulingShowcase'>
        <div className="content">
            <h1 
              data-aos='fade-up' 
              data-aos-duration={800} 
              data-aos-offset={500}
            >
              Scheduling automation happens before and after meetings
            </h1>

            <div className="showcase">
                {
                  windowSize.width > 800 && 
                  <>
                    <div 
                      className="imageContainer"
                      data-aos='fade-up' 
                      data-aos-duration={800} 
                      data-aos-offset={500} 
                    >
                      {showcaseImages.map((image, index) => 
                        <>
                          {slideCounter === index && 
                            <motion.img
                              src={image}
                              initial={{opacity:0}}
                              animate={{opacity:1, transition:{duration:0.5}}}
                              exit={{opacity:0}} 
                            />
                        }
                        </>
                      )}
                    </div>
                    
                    <div 
                      className="showcaseTitles"
                      data-aos='fade-up' 
                      data-aos-duration={800} 
                      data-aos-delay={200} 
                      data-aos-offset={500} 
                    >
                      <div className="loadingBar">
                        <div 
                          className={`loadingBarInner`}
                          style={{width:`${loaderWidth}%`, borderRadius:'3px'}}
                        >
                        </div>
                      </div>
                        {showcaseTitles.map((title, index) => 
                          <h1 
                            key={index} 
                            className={`title ${slideCounter === index ? 'active' : ''}`}
                            onClick={() => setSlideCounter(index)}  
                          >
                            {title}
                          </h1>
                        )}
                    </div>
                  </>
                }
                {
                  windowSize.width <= 800 && 
                  <>
                    {showcaseTitles.map((title, index) => 
                    <div className={`mobileShowcaseSection ${slideCounter === index ? 'active' : ''}`}>
                        <h2>{title}</h2>
                        <img src={showcaseImages[index]} alt={title} />
                    </div>
                    )}
                  </>
                }
            </div>
        </div>
    </div>
    </AnimatePresence>
  )
}

export default SchedulingShowcase