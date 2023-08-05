import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import { pageTitle } from '../PageTitle';
import HeaderOne from '../Header/HeaderOne';

const PortfolioTwo = () => {
    pageTitle('Portfolio Two');
    return (
        <>
        <HeaderOne></HeaderOne>
        
        <div className="portfolio__column-two section-padding pt-12">
        <div className="contact__area-title flex mx-auto pl-12 justify-center flex-col mb-12">
                            <span className="subtitle">Ürünlerimiz</span>
                            <h2>Ürünlerimizi İnceleyin</h2> 
                        </div>
            <div className="container">
                <div className="row"> 
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="https://sektorelbilisim.com/wp-content/uploads/2022/07/WhatsApp-Gorsel-2023-03-15-saat-15.32.27.jpg" alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>POS Cihazi</span>
                                <h4><Link to="/portfolio-details-two">POS Cihazi</Link></h4> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-12 mt-60 t-center">
                        <Link className="theme-btn-1" to="">Tüm Cihazlar<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>            
        </>
    );
};

export default PortfolioTwo;