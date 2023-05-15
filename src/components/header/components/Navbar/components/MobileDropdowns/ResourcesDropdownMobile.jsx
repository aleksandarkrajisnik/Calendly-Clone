import React from 'react'
import { resourcesDropdownLists } from '../../utils'

const ResourcesDropdownMobile = () => {
  return (
    <div className='resourcesDropdownMobile'>
      <div className="heading">
        <h4>LEARN</h4>
      </div>
      {resourcesDropdownLists.learn.map(item => (
        <div key={item} className='resourcesItem'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
      <div className="heading">
        <h4>CONNECT</h4>
      </div>
      {resourcesDropdownLists.connect.map(item => (
        <div key={item} className='resourcesItem'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ResourcesDropdownMobile