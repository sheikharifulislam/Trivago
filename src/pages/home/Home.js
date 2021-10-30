import React from 'react';
import AllServices from '../allServices/AllServices';
import HeaderBanner from '../headerBanner/HeaderBanner';
import Inspired from '../inspired/Inspired';
import Subscribe from '../subscribe/Subscribe';
import WhyChoices from '../whyChoices/WhyChoices';

const Home = () => {
    return (
       <>
        <HeaderBanner/>      
        <Inspired/>
        <WhyChoices/>
        <AllServices/>
        <Subscribe/>
       </>
    );
};

export default Home;