import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import payment from '../../../images/payment.png';

const Footer = () => {
    return (
        <section className="footer" id="footer">

            <div className="box-container">

                <div className="box">
                    <h3>our branches</h3>
                    <a href="/"> <i className="fas fa-map-marker-alt"></i> Bangladesh </a>
                    <a href="/"> <i className="fas fa-map-marker-alt"></i> France </a>
                    <a href="/"> <i className="fas fa-map-marker-alt"></i> Russia </a>
                    <a href="/"> <i className="fas fa-map-marker-alt"></i> USA </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <Link to="/home" className="links"> <i className="fas fa-arrow-right"></i> Home </Link>
                    <Link to="/about" className="links"> <i className="fas fa-arrow-right"></i> About </Link>
                    <Link to="/products" className="links"> <i className="fas fa-arrow-right"></i> Products </Link>
                    <Link to="/allReviews" className="links"> <i className="fas fa-arrow-right"></i> Reviews </Link>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="tel:+8801629161451" className="links"> <i className="fas fa-phone"></i> +8801629161451 </a>
                    <a href="mailto:sibrahim.ih@gmail.com" className="links"> <i className="fas fa-envelope"></i> sibrahim.ih@gmail.com </a>
                    <a href="/" className="links"> <i className="fas fa-globe"></i> IbrahimH.com</a>
                    <a href="/" className="links"> <i className="fas fa-map-marker-alt"></i> Shariatpur, Dhaka - Bangladesh </a>
                </div>

                <div className="box">
                <h3>newsletter</h3>
                    <input type="email" placeholder="your email" className="email" />
                    <button className="btn">subscribe</button>
                    <img src={payment} className="payment-img" alt="" />
                </div>

            </div>

            <div className="credit"> created by <span> Ibrahim Howlader </span> | all rights reserved </div>

        </section>
    );
};

export default Footer;