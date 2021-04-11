import React from 'react';
import '../../App.scss'
import Carousel from '../layout/Carousel';
import Service from "../layout/Service";
import AboutCompany from '../layout/AboutCompany';
import { Advice } from '../layout/Advice';
import Advantages from '../layout/Advantages';
import NewsCompany from "../layout/NewsCompany";
import Footer from '../layout/Footer';

function Home () {
    return (
        <>
            <Carousel />
            <Service />
            <AboutCompany />
            <Advice />
            <Advantages />
            <NewsCompany />
            <Footer />
        </>
    );
}

export default Home;