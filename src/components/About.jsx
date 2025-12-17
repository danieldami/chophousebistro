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
                        Chop House Bistro & Grills is a modern dining spot in Port Harcourt where great taste meets great atmosphere. We serve freshly prepared meals, expertly grilled favorites, and delicious local and continental dishes made with quality ingredients. Whether you’re stopping by for a quick bite or a relaxed meal with friends, Chop House offers a satisfying experience every time.</p>
                    <a href="#more" className="button-primary">Read Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default About;
