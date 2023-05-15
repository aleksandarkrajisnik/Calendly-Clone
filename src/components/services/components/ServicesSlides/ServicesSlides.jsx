import React from 'react'
import './ServicesSlides.scss'
import { servicesSlidesList } from '../../utils'
import { AnimatePresence, motion } from 'framer-motion';
import { toCamelCase } from '../../utils';
import useWindowSize from '../../../../assets/hooks/useWindowSize';
import Button from '../../../button/Button'

const ServicesSlides = ({activeTab}) => {


    const windowSize = useWindowSize();

  return (
    <AnimatePresence>
        <div 
            data-aos='fade-up' 
            data-aos-duration={800} 
            data-aos-delay={300}
            className={`servicesSlides`} 
        >
        
        <div className={`servicesSlidesContent ${toCamelCase(activeTab)}`}>
            {windowSize.width > 990 && servicesSlidesList.map((slide, index) => (
                <div key={index} >
                    {activeTab === slide.title && 
                    <motion.div 
                        className="slide"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: { duration: 0.4 }}}
                        exit={{opacity: 0}}
                    >
                        <div className="slideText">
                                {slide.sectionTitles.map((title, index) => 
                                    <div key={title} className='section'>
                                        <img className='sectionIcon' src={slide.icons[index]} alt="" />
                                        <div className="sectionText">
                                            <h4>{title}</h4>
                                            <p>{slide.sectionDescriptions[index]}</p>
                                        </div>
                                    </div>
                                )}
                                <Button arrow style={{marginTop:'30px', marginLeft:'40px'}}>
                                    Learn more
                                </Button>
                        </div>
                        <div className="slideImage">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                    </motion.div>}
                </div>
            ))} 

             {windowSize.width <= 990 && servicesSlidesList.map((slide, index) => (
                <div key={index} >
                    <motion.div 
                        key={index} 
                        className="slide"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: { duration: 0.4 }}}
                        exit={{opacity: 0}}
                    >
                        <div className="slideText">
                                {slide.sectionTitles.map((title, index) => 
                                    <div key={title} className='section'>
                                        <img className='sectionIcon' src={slide.icons[index]} alt=""/>
                                        <div className="sectionText">
                                            <h4>{title}</h4>
                                            <p>{slide.sectionDescriptions[index]}</p>
                                        </div>
                                    </div>
                                )}
                                <Button arrow style={{marginTop:'30px', marginLeft:'40px'}}>
                                    Learn more
                                </Button>
                        </div>
                        <div className="slideImage">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                    </motion.div>
                </div>
            ))} 
            
        </div>
        <div className={`heightFixer ${toCamelCase(activeTab)}Slide`}></div>     
    </div>
    </AnimatePresence>
  )
}

export default ServicesSlides