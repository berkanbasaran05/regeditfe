import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesData = [
      {
        id: 1,
        title: 'Yazılım Çözümleri',
        batch: '01',
        description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
        imgOne: 'assets/img/icon/services-1.png',
        imgTwo: 'assets/img/icon/services-11.png',
        href: '/services-details',
      },
      {
        id: 2,
        title: 'Donanım Çözümleri   ',
        batch: '02',
        description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
        imgOne: 'assets/img/icon/services-2.png',
        imgTwo: 'assets/img/icon/services-22.png',
        href: '/services-details',
      },
      {
        id: 3,
        title: '7/24 Canlı Destek',
        batch: '03',
        description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
        imgOne: 'assets/img/icon/services-3.png',
        imgTwo: 'assets/img/icon/services-33.png',
        href: '/services-details',
      },
      {
        id: 4,
        title: 'Kurumsal Destek',
        batch: '04',
        description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
        imgOne: 'assets/img/icon/services-4.png',
        imgTwo: 'assets/img/icon/services-44.png',
        href: '/services-details',
      },
    ];
    return (
        <div className="services__area section-padding" style={{backgroundImage: `url('assets/img/services.png')`}}>
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="services__area-title lg-t-center"> 
                            <span className="subtitle">Hizmetlerimiz</span>
                            <h2>Hizmetlerimiz</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((item, id)=>(
                        <div className="col-xl-6 col-lg-6 col-md-6" key={id}>
                            <div className="services__area-item"> 
                                <span>{item.batch}</span>
                                <div className="services__area-item-icon">
                                    <img src={item.imgTwo} className='ml-6 mt-4' alt="" />
                                    <div className="services__area-item-icon-one mt-4 ">
                                        <img src={item.imgOne} alt="" />
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><Link to="/">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;