import React from 'react';
import './Banner.css';
import home_banner from '../../../images/Home-banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="home_banner" id="home_banner">

            <div className="banner_title">
                <h4 >Discover the car , 
                    that is right for you !</h4>
                <h3>find your car</h3>
            </div>

            <img  src={home_banner} alt="" />

            <Link to="/products" className="btn">Explore Cars</Link>

        </section>
    );
};

export default Banner;