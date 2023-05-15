import React from 'react'
import { solutionsDropdownList } from './../../utils'
import { RiArrowRightSLine } from 'react-icons/ri'

const SolutionsDropdown = () => {
  return (
    <div className="solutionsDropdown">
        {solutionsDropdownList.map(item => (
            <div key={item} className="solutionsBox">
                <span>
                  {item}
                  <RiArrowRightSLine/>  
                </span>
            </div>
        ))}
    </div>
  )
}

export default SolutionsDropdown