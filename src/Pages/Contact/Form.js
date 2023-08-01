import React from 'react';

const Form = () => {
    return (
        <>
        <form action="#">
            <div className="row">
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="name" placeholder="Adınız" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="email" name="email" placeholder="Email" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="subject" placeholder="Konu" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-30">
                    <div className="contact__area-bottom-form-item">
                        <textarea name="message" rows="5" placeholder="Mesajınız"></textarea>
                    </div>
                </div>
               
                <div className="col-sm-12">
                    <div className="contact__area-bottom-form-item">
                        <button className="theme-btn-1" type="submit">Gönder<i className="far fa-long-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </form>            
        </>
    );
};

export default Form;