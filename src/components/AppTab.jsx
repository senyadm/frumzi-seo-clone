import React from 'react'
import Navbar from './Navbar'
import AppHero from './AppHero'
import AppMobApp from './AppMobApp'
import MobileBonus from './MobileBonus'
import SupportShift from './SupportShift'
import Footer from './Footer'

const AppTab = () => {
  return (
    <div>

      <Navbar />
      <AppHero />
      <AppMobApp />
      <MobileBonus />
      <SupportShift />
      <Footer />
    </div>
  )
}

export default AppTab