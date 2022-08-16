import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './AboutUs.css';
import about from '../../images/aboutUs-1.png'

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="single_page_heading">
                <h1>About Us</h1>
                <p> <a href="/">home</a> &#62;&#62; About Us </p>
            </section>

            <section className="about">

                <div className="image">
                    <img src={about} alt="" />
                </div>

                <div className="content">
                    <h4>ABOUT THE CAR DEALER</h4>
                    <h3>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD</h3>
                    <p>The automobile industry is experiencing a dramatic transformation that will forever alter the way both new and used vehicles are marketed and sold. As consumers change their operational structure and methods. Pompei-Schmidt Auto Dealers Inc. (PSAD) has recognized these shifting dynamics and positioned itself to take maximum advantage of rapidly-changing consumer and economic trends
                    PSAD mission is to deliver non-prime credit lease and purchase financing, consulting, training and ongoing support that will provide automobile dealerships across the United States with the skills and services they need to improve their competitive posture and increase profitability. Areas of focus include sales techniques, leasing,finance and insurance. The economic results of the successful accomplishment of this mission will be significant profits both for dealer clients and for PSAD.
                    </p>
                    <Link to="/products" ><button className="btn">Buy Now</button></Link>
                </div>


            </section>
        </>
    );
};

export default AboutUs;