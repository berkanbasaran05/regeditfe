import React from 'react';
import FooterThree from '../../Footer/FooterThree';
import HeaderOne from '../../Header/HeaderOne';
import { pageTitle } from '../../PageTitle';
import PortfolioFilter from '../../Portfolio/PortfolioFilter';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Skill from '../Skill/Skill';
import Services from '../Services/Services';
import { useSpring,motion } from 'framer-motion';


const HomeThree = () => {
    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
      });
    pageTitle('Anasayfa');
    return (
        <>
       {/**
        *  <HeaderOne></HeaderOne>            
        <Banner></Banner>
        <Services></Services>
        <PortfolioFilter></PortfolioFilter>
        <Reviews></Reviews>
        <Contact></Contact>
        <FooterThree></FooterThree>
        */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-white-100">
      <img
        src="/assets/img/comingsoongif.gif"
        alt="Coming Soon Gif"
        className="w-full h-screen object-cover hidden md:flex "
      />
      <img
        src="/assets/img/comingsoon2.gif"
        alt="Coming Soon Gif"
        className="w-full h-screen object-cover flex md:hidden"
      />
    </div>
        
      
    
        </>
    );
};

export default HomeThree;