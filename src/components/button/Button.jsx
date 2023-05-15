import React from 'react'
import './Button.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Button = ({ animationRef, outlined = false, arrow, children, style }) => {


  return (
    <div ref={animationRef} style={style || {}} className={`button ${outlined ? 'outlined' : ''} ${arrow ? 'arrow' : ''}`}>
        { children }
        { arrow && <AiOutlineArrowRight/> }
    </div>
  )
}

export default Button