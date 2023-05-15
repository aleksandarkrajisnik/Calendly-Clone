import React from 'react'
import './ContentBar.scss'
import { footerContent } from '../../utils'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ContentBar = () => {
  return (
    <div className='contentBar'>
      {footerContent.map((item, index) => 
        <div key={index} className='contentSection'>
          <h3>
            {item.title}
            {item.arrow && <AiOutlineArrowRight/>}
          </h3>
          {item.sections?.map((section, index) => 
            <p key={index}>
              {section.title}
              {section.tag && <span className={section.tag.type}>{section.tag.title}</span>}
            </p>
          )}
          {item.subHeadings?.map((heading, index) => 
            <h3 className='subHeading' key={index}>
              {heading.title}
              {heading.arrow && <AiOutlineArrowRight/>}
            </h3>
          )}
        </div>
      )}
    </div>
  )
}

export default ContentBar