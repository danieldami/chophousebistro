import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section-padding about-section" id="about">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious Burger" className="about-image" />
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Us</h2>
                    <p className="about-text">
                        Flavourtown is more than just a restaurant; it's a culinary journey. We believe in crafting dishes that are not only visually stunning but also explode with flavor in every bite. Our chefs use only the freshest ingredients to bring you the best dining experience in town.
                    </p>
                    <a href="#more" className="button-primary">Read Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default About;
