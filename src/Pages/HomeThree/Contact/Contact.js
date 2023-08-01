import React from 'react';
import Form from '../../Contact/Form';

const Contact = () => {
    return (
        <div className="contact__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="contact__area-title lg-t-center">
                            <span className="subtitle">İletişime Geçin</span>
                            <h2>Bizimle İletişime Geçin</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form">
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
    );
};

export default Contact;