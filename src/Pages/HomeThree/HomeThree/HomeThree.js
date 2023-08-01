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

const HomeThree = () => {
    pageTitle('Anasayfa');
    return (
        <>
        <HeaderOne></HeaderOne>            
        <Banner></Banner>
        <Services></Services>
        <PortfolioFilter></PortfolioFilter>
        <Reviews></Reviews>
        <Contact></Contact>
        <FooterThree></FooterThree>
        </>
    );
};

export default HomeThree;