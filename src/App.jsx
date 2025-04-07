import { useEffect, useState } from 'react'
import Home from './components/Home'
import AOS from "aos";
import "aos/dist/aos.css"; 
import ScrollToTopButton from './components/ScrolltoTopButton';
import { Routes, Route } from "react-router-dom";
import AppTab from './components/AppTab';
import BonusTab from './components/BonusTab';


function App() {

  useEffect(() => {
    AOS.init({ duration: 800 }); 
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/app" element={<AppTab />} /> 
        <Route path="/bonus" element={<BonusTab />} /> 
      </Routes>
      <ScrollToTopButton />
    </>
  )
}

export default App
