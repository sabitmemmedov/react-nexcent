
import React, { useState } from 'react';
import Header from "../../Components/Header/Header"
import HeroSection from './Components/HeroSection/HeroSection';
import ClientSection from './Components/ClientSection/ClientSection';
import SystemSection from './Components/SystemSection/SystemSection';
import PixelgradeSection from './Components/PixelgradeSection/PixelgradeSection';
import HelpingSection from './Components/HelpingSection/HelpingSection';
import DesignSection from './Components/DesignSection/DesignSection';
import CustomersSection from './Components/CustomersSection/CustomersSection';
import MarketingSection from './Components/MarketingSection/MarketingSection';
import LiberioSection from './Components/LiberioSection/LiberioSection';
import Footer from '../../Components/Footer/Footer';
import SignUpModal from '../../Components/SignUpModal/SignUpModal';

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <> 
      <Header openModal={openModal} />
      <SignUpModal isOpen={modalIsOpen} closeModal={closeModal}/>
      <HeroSection/>
      <ClientSection/>
      <SystemSection/>
      <PixelgradeSection/>
      <HelpingSection/>
      <DesignSection/>
      <CustomersSection/>
      <MarketingSection/> 
      <LiberioSection/>
      <Footer/>
    </>
  );
}

export default Home;

