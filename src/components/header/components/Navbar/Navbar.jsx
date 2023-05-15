import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import Button from '../../../button/Button';
import Logo from '../../../../assets/images/logos/calendly-logo-full.png';
import LogoSmall from '../../../../assets/images/logos/calendly-logo.png';
import { RiArrowRightSLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import SolutionsDropdown from './components/DesktopDropdowns/SolutionsDropdown';
import SolutionsDropdownMobile from './components/MobileDropdowns/SolutionsDropdownMobile';
import ResourcesDropdown from './components/DesktopDropdowns/ResourcesDropdown';
import ResourcesDropdownMobile from './components/MobileDropdowns/ResourcesDropdownMobile';
import { FiUser } from 'react-icons/fi';
import useWindowSize from '../../../../assets/hooks/useWindowSize';
import useScrollPosition from '../../../../assets/hooks/useScrollPosition';
import Hamburger from 'hamburger-react'


const Navbar = () => {

    const [solutionsHovered, setSolutionsHovered] = useState(false);
    const [resourcesHovered, setResourcesHovered] = useState(false);
    const [solutionsMobileDropdownOpen, setSolutionsMobileDropdownOpen] = useState(false);
    const [resourcesMobileDropdownOpen, setResourcesMobileDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const windowSize = useWindowSize();
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if(windowSize.width >= 1000){
            setIsMobileMenuOpen(false);
            setSolutionsMobileDropdownOpen(false);
            setResourcesMobileDropdownOpen(false);
        }
    }, [windowSize])

  return (
    <div className={`navbar ${scrollPosition > 0 ? 'withShadow' : ''}`}>
        <div className="navbarContent">
            
            <img src={windowSize.width > 480 ? Logo : LogoSmall} alt="Calendly" className='logo' /> 

            {windowSize.width > 1000 && 
                <div className="navlinks">
                    <div className="navlink">
                        <span>Product</span>
                    </div>
                    <div 
                        className="navlink" 
                        onMouseLeave={() => setSolutionsHovered(false)}   
                        onMouseEnter={() => setSolutionsHovered(true)}
                    >
                        <span>Solutions</span>
                        {solutionsHovered ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
                        {solutionsHovered && <SolutionsDropdown/>}
                    </div>
                    <div className="navlink">
                        <span>Teams & Companies</span>
                    </div>
                    <div className="navlink">
                        <span>Pricing</span>
                    </div>
                    <div 
                        className="navlink"
                        onMouseEnter={() => setResourcesHovered(true)} 
                        onMouseLeave={() => setResourcesHovered(false)}       
                    >
                        <span>Resources</span>
                        {resourcesHovered ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
                        {resourcesHovered && <ResourcesDropdown/>}
                    </div>
                </div>
            }
            {isMobileMenuOpen && 
                <div className='mobileNavlinks'>
                    <div className="navlink">
                        <span>Product</span>
                    </div>
                    <div 
                        className="navlink"
                        onClick={() => setSolutionsMobileDropdownOpen(!solutionsMobileDropdownOpen)}
                    >
                        <span>Solutions</span>
                        {solutionsMobileDropdownOpen ? <RiArrowDownSLine/> : <RiArrowRightSLine/>}
                    </div>
                    {solutionsMobileDropdownOpen && <SolutionsDropdownMobile/>}
                    <div className="navlink">
                        <span>Teams & Companies</span>
                    </div>
                    <div className="navlink">
                        <span>Pricing</span>
                    </div>
                    <div 
                        className="navlink"
                        onClick={() => setResourcesMobileDropdownOpen(!resourcesMobileDropdownOpen)}
                    >
                        <span>Resources</span>
                        {resourcesMobileDropdownOpen ? <RiArrowDownSLine/> : <RiArrowRightSLine/>}
                    </div>
                    {resourcesMobileDropdownOpen && <ResourcesDropdownMobile/>}
                </div>
            }

            <div className="rightSideButtons">
                {windowSize.width > 1200 ? <span>Log In</span> : <FiUser className='userIcon'/>}
                <Button>
                    Get started
                </Button>
                {windowSize.width <= 1000 && 
                    <Hamburger 
                        rounded 
                        size={20}
                        distance='lg'
                        toggled={isMobileMenuOpen}
                        className='hamburgerIcon' 
                        toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar