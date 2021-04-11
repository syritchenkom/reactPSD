import React from 'react';
import './layout.scss';
import { Link } from 'react-router-dom';
import { FaRegWindowMinimize } from 'react-icons/fa';
import Image_1  from '../../images/service_1.png';
import Image_2  from '../../images/service_2.png';
import Image_3  from '../../images/service_3.png';
import ServiceItem from "../modul/ServiceItem";

const Service = () => {

    return (
        <>
            <section className='service'>
                <div className='container'>
                    <div className='service-top'>
                        <div className='service-content'>
                            <FaRegWindowMinimize />
                            <div className='service-section'>
                                <div className='service-title'>
                                    <h2>Our services</h2>
                                </div>
                                <div className='service-text'>
                                    <p>An integrated approach to your issue, timely legal assistance, representation of interests in all courts.</p>
                                </div>
                            </div>
                        </div>
                        <div className='service-button'>
                            <Link
                                className='button'
                                to='/services'
                                >
                                Show all services
                            </Link>
                        </div>
                    </div>
                    <div className='service-items'>
                        <ServiceItem
                            src={Image_1}
                            title='Bankruptcy and liquidation'
                            text='Complete termination of the existence of a legal entity while maintaining the legality of all previous activities'
                            item='/services'
                        />
                        <ServiceItem
                            src={Image_2}
                            title='Advocate support'
                            text='We guarantee full professional customer service in the stated areas of activity and confidentiality.'
                            item='/services'
                        />
                        <ServiceItem
                            src={Image_3}
                            title='Bankruptcy and liquidation'
                            text='Complete termination of the existence of a legal entity while maintaining the legality of all previous activities'
                            item='/services'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;