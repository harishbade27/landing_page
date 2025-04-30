import React from 'react';
import '../App.css';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src="https://www.beessoftware.in/wp-content/uploads/2023/05/BEES-e1684225590224.png"
                        alt="Bees Logo"
                    />
                    <div className="social-icons">
                        <a href="https://www.facebook.com/BeeSSoftware/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://x.com/bees_ltd" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/beessoftwaresolutions/?igshid=MmU2YjMzNjRlOQ%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@BeeSSoftwareSolutions" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://www.linkedin.com/company/13176356/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>

                <div className="footer-links">
                    <div>
                        <h4>Products</h4>
                        <ul>
                            <li>Financial Cloud</li>
                            <li>Student Cloud</li>
                            <li>Institutions Cloud</li>
                            <li>S C M Cloud</li>
                            <li>H C M Cloud</li>
                            <li>Self Services</li>
                            <li>Mobile App</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Menu</h4>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Clients</li>
                            <li>Careers</li>
                            <li>News & Blogs</li>
                            <li>Events</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <FaMapMarkerAlt />
                                H.No:5–45/A/1, Gangasthan, (V) Dulapally, (M) Qutbullapur, Hyderabad-500014, Telangana
                            </li>
                            <li>
                                <FaPhoneAlt /> +91-7093800994
                            </li>
                            <li>
                                <FaEnvelope /> admin@beessoftware.in
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© Bees Software 2023 All Rights Reserved</p>
            </div>

            <div className="scroll-top" onClick={scrollToTop}>
                <FaArrowUp />
            </div>
        </footer>
    );
};

export default Footer;
