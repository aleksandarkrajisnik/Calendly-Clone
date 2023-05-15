import React from 'react';
import './Header.scss';
import LanguageBar from './components/LanguageBar/LanguageBar';
import Navbar from './components/Navbar/Navbar';
import useScrollPosition from '../../assets/hooks/useScrollPosition';

const Header = () => {

  const scrollPosition = useScrollPosition();

  return (
    <div className={`header ${scrollPosition > 715 ? 'animatedHeader' : ''}`}>
        <LanguageBar/>
        <Navbar/>
    </div>
  )
}

export default Header