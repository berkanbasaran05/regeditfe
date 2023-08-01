import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sponsors = () => {
    return (
        <div className="sponsors__area">
            
            <div className="container">
            <div className="sponsors__area-title lg-t-center"> 
                            <span className="subtitle">İş Ortaklarımız</span>
                            <h2>Referanslarımızdan Bazıları</h2> 
                        </div>
                <div className="row">
                    
                   
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            spaceBetween= {30}
                            breakpoints={{
                                0: {
                                    spaceBetween: 20,
                                    slidesPerView: 2
                                },
                                575: {
                                    spaceBetween: 80,
                                    slidesPerView: 3
                                },
                                992: {
                                    slidesPerView: 4
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                            }}
                        >
                            <SwiperSlide className="sponsors__area-brand ">
                                <Link to="#"><img src="https://www.doyuyo.com/wp-content/uploads/2023/01/doyuyo_logo.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand ">
                                <Link to="#"><img src="https://www.doyuyo.com/wp-content/uploads/2023/01/doyuyo_logo.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand ">
                                <Link to="#"><img src="https://www.doyuyo.com/wp-content/uploads/2023/01/doyuyo_logo.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand ">
                                <Link to="#"><img src="https://www.doyuyo.com/wp-content/uploads/2023/01/doyuyo_logo.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand ">
                                <Link to="#"><img src="https://www.doyuyo.com/wp-content/uploads/2023/01/doyuyo_logo.png" alt="" /></Link>
                            </SwiperSlide>
                        </Swiper>
                   
                </div>
            </div>
        </div>
    );
};

export default Sponsors;