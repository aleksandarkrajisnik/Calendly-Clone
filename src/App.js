import React, { useEffect, useState } from 'react'
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Customers from "./components/customers/Customers"
import Services from './components/services/Services'
import SchedulingShowcase from './components/schedulingShowcase/SchedulingShowcase'
import Testimony from './components/testimony/Testimony'
import Security from './components/security/Security'
import Integrations from './components/integrations/Integrations'
import GetStarted from './components/getStarted/GetStarted'
import StickyScroll from './components/stickyScroll/StickyScroll'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({once:true});
  }, [])

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Customers/>
      <Services/>
      <StickyScroll/>
      <Testimony/>
      <SchedulingShowcase/>
      <Integrations/>
      <Security/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
