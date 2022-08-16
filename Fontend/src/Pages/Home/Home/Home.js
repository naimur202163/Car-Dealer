import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import IconsSection from '../IconsSection/IconsSection';
import Newsletter from '../Newsletter/Newsletter';
import OurProducts from '../OurProducts/OurProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <IconsSection />
            <OurProducts/>
            <Newsletter/>
            <Reviews/>
        </>
    );
};

export default Home;