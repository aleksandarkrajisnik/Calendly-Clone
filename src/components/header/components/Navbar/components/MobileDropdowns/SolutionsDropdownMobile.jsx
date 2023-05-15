import React from 'react'
import { solutionsDropdownList } from '../../utils'

const SolutionsDropdownMobile = () => {
  return (
    <div className='solutionsDropdownMobile'>
        {solutionsDropdownList.map(item => (
            <div key={item} className='solutionsItem'>
                {item}
            </div>
        ))}
    </div>
  )
}

export default SolutionsDropdownMobile