import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';

import { pageTitle } from '../PageTitle';
import Form from './Form';
import HeaderOne from '../Header/HeaderOne';

const Contact = () => {
    pageTitle('İletişim');
    return (
        <>
        <HeaderOne></HeaderOne>
        <div className="contact__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact__area-title">
                            <span className="subtitle">İletişime Geçin</span>
                            <h2>Bizimle İletişime Geçiniz</h2> 
                        </div>
                        <div className="contact__area-info">
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-phone-alt"></i>
                                    <span>Telefon :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="tel:+905335679474">+90 ( 533 )  567 9474</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="mailto:ufukergin41@gmail.com">ufukergin41@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Konum :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <Link to="#">Topselvi, Arkoz Sk. No:6, 34873 Kartal/İstanbul</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form page">
                                <Form></Form>
                            </div>
                            <div className="contact__area-bottom-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.7706998958024!2d29.21467867638204!3d40.89884452615571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4a4fc89ea81%3A0x8ed8f3d447fb2fda!2sTopselvi%2C%20Arkoz%20Sk.%20No%3A6%2C%2034873%20Kartal%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1690860322046!5m2!1str!2str" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>
        </>
    );
};

export default Contact;