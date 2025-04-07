import React from 'react'
import Navbar from './Navbar'
import BonusHero from './BonusHero'
import BonusDesc from './BonusDesc'
import SportBonus from './SportBonus'
import ExtraOffers from './ExtraOffers'
import Footer from './Footer'

const BonusTab = () => {
  return (
    <div>
      <Navbar />
      <BonusHero />
      <BonusDesc />
      <SportBonus />
      <ExtraOffers />
      <Footer />
    </div>
  )
}

export default BonusTab