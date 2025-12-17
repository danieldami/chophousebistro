import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">CHOP HOUSE BISTRO</h3>
                    <p>Where taste meets passion. Come dine with us.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>Merciland, No3, Prince Okey Str. Road, off NTA Road. Port Hacourt</p>
                    <p>07068853322</p>
                    <p>hello@chophouse.com</p>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Twitter">TW</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom center">
                <p>&copy; {new Date().getFullYear()} Flavourtown. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
