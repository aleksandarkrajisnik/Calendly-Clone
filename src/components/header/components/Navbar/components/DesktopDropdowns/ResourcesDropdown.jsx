import React from 'react'
import './../../Navbar.scss'
import { resourcesDropdownLists } from './../../utils'
import { RiArrowRightSLine } from 'react-icons/ri'

const ResourcesDropdown = () => {

    const { learn, connect } = resourcesDropdownLists;

  return (
    <div className='resourcesDropdown'>
        <div className="learn">
            <div className="heading">
                <h4>LEARN <RiArrowRightSLine/></h4>
            </div>
            <div className="content">
                {learn.map(item => (
                    <div key={item.title} className="resourcesDropdownItem">
                        <h4>{item.title} <RiArrowRightSLine/> </h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="connect">
            <div className="heading">
                <h4>CONNECT <RiArrowRightSLine/></h4>
            </div>
            <div className="content">
                {connect.map(item => (
                    <div key={item.title} className="resourcesDropdownItem">
                        <h4>{item.title} <RiArrowRightSLine/> </h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ResourcesDropdown