import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">WELCOME</h1>
                <h2 className="hero-subtitle">where every dish is a mouth watering masterpiece!</h2>
                <div className="hero-buttons">
                    <a href="#menu" className="button-primary">Check Our Menu</a>
                </div>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
};

export default Hero;
