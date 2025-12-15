import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    {/* Logo placeholder, replacing text for now */}
                    <a href="#">FLAVOURTOWN</a>
                </div>
                <div className="navbar-links">
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
                <div className="navbar-actions">
                    <a href="#order" className="button-primary">Order Now</a>
                    <div className="cart-icon">
                        {/* Simple cart icon placeholder */}
                        🛒
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
