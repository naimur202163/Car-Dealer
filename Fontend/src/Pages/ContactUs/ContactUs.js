import React from 'react';
import Header from '../Shared/Header/Header';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>  
        <Header/>
            <section className="single_page_heading">
                <h1>Contact Us</h1>
                <p> <a href="/">home</a> &#62;&#62; Contact Us </p>
            </section>
            <section className="contact_us">

                <div className="contact_icons-container">

                    <div className="icons">
                        <i className="fas fa-phone"></i>
                        <h3>our number</h3>
                        <p>+123-456-7890</p>
                        <p>+111-222-3333</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-envelope"></i>
                        <h3>our email</h3>
                        <p>shaikhanas#gmail.com</p>
                        <p>anasbhai@gmail.com</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>our address</h3>
                        <p>mumbai, india - 400104</p>
                    </div>

                </div>

                <div className="row">

                    <form action="">
                        <h3>get in touch</h3>
                        <div className="inputBox">
                            <input type="text" placeholder="enter your name" className="box" />
                            <input type="email" placeholder="enter your email" className="box" />
                        </div>
                        <div className="inputBox">
                            <input type="number" placeholder="enter your number" className="box" />
                            <input type="text" placeholder="enter your subject" className="box" />
                        </div>
                        <textarea placeholder="your message" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="btn" />
                    </form>

                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633968347413!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                </div>

            </section>
        </>
    );
};

export default ContactUs;