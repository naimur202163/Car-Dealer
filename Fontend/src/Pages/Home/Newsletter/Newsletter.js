import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">

            <h3>subscribe for latest updates</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.</p>

            <form>
                <input type="email" placeholder="enter your email" />
                <input type="submit" value="subscribe" />
            </form>

        </section>
    );
};

export default Newsletter;