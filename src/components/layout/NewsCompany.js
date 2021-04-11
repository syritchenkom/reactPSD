import React from "react";
import './layout.scss';
import { FaRegWindowMinimize, FaQuoteRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import InfoSlide from '../modul/InfoSlide';
import News_1 from '../../images/news_1.jpg';
import News_2 from '../../images/news_2.jpg';
import NewsItem from "../modul/NewsItem";

const NewsCompany = () => {

    return (
        <>
            <section className='news'>
                <div className='container'>
                    <div className='news-top'>
                        <div className='news-content'>
                            <FaRegWindowMinimize />
                            <div className='news-section'>
                                <div className='news-title'>
                                    <h2>Company's news</h2>
                                </div>
                                <div className='news-text'>
                                    <p>An integrated approach to your issue, timely legal assistance, representation of interests in all courts.</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-button'>
                            <Link
                                className='button'
                                to='/about'
                            >
                                Open all news
                            </Link>
                        </div>
                    </div>
                    <div className='news-info'>
                        <div className='news-slider'>
                            <div className='news-svg'>
                                <FaQuoteRight />
                            </div>
                            <InfoSlide />
                        </div>
                        <NewsItem
                            item='/about'
                            src={News_1}
                            date='03.04'
                            title='Company news'
                            text='Today, the team of the company unites highly professional experts with specializations in certain areas of law ... »'
                        />
                        <NewsItem
                            item='/about'
                            src={News_2}
                            date='03.04'
                            title='Company news'
                            text='Today, the team of the company unites highly professional experts with specializations in certain areas of law ... »'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsCompany;