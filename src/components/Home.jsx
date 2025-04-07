import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import SectionLic from './SectionLic'
import Reg from './Reg'
import Dep from './Dep'
import Coins from './Coins'
import Bonus from './Bonus'
import Games from './Games'
import Support from './Support'
import Faq from './Faq'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SectionLic />
            <Reg />
            <Dep />
            <Coins />
            <Bonus />
            <Games />
            <Support />
            <Faq />
            <Footer />
        </div>
    )
}
export default Home;
