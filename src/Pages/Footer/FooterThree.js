import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
    return (
        <>
            <div className="footer__area pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12">
                            <div className="footer__area-widget t-center">
                                <div className="footer__area-widget-about">
                                    <div className="footer__area-widget-about-social three">
                                        <ul>
                                            <li><Link to=''><i className="fab fa-facebook-f"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-twitter"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-behance"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-linkedin-in"></i></Link> </li>
                                            <li><Link to=''><i className="fal fa-basketball-ball"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-pinterest-p"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-instagram"></i></Link> </li>
                                        </ul>
                                    </div>
                                    <div className="footer__area-widget-about-menu three">
                                        <ul>
                                            <li><Link to='/'>Anasayfa</Link></li>
                                            <li><Link to='/'>Hizmetlerimiz</Link></li>
                                            <li><Link to='/portfolio-two'>Ürünlerimiz</Link></li>
                                            <li><Link to='/contact'>İletişim</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area">
                <div className="container">
                    <div className="row align-items-center copyright__area-border">
                        <div className="col-xl-12">
                            <div className="copyright__area-left t-center">
                                <p> © 2023<a href="index.html"> RegeditBilisim</a>Tüm haklar saklıdır</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterThree;