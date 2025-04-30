import React, { useState } from 'react';
import '../App.css';
import { FaPhoneAlt, FaCalendarCheck, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="card">
          <div className="logo">
            <img
              src="https://www.beessoftware.in/wp-content/uploads/2023/05/BEES-e1684225590224.png"
              alt="BeeS Software"
            />
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>

              <li className="dropdown">
                <a href="#products">Products +</a>
                <div className="dropdown-card">
                  <div className="card-section">
                    <ul>
                      <li><a href="#institute-cloud">Institutions Cloud</a></li>
                      <li><a href="#students-cloud">Students Cloud</a></li>
                      <li><a href="#financial-cloud">Financial Cloud</a></li>
                      <li><a href="#hcm-cloud">HCM Cloud</a></li>
                      <li><a href="#scm-cloud">SCM Cloud</a></li>
                      <li><a href="#self-services">Self Services</a></li>
                      <li><a href="#mobile-app">Mobile App</a></li>
                      <li><a href="#betplus">BETPlus</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li><a href="#clients">Clients</a></li>
              <li><a href="#careers">Careers</a></li>

              <li className="dropdown more-dropdown">
                <a href="#more">More +</a>
                <div className="dropdown-card">
                  <div className="card-section">
                    <ul>
                      <li><a href="#news-blogs">News & Blogs</a></li>
                      <li><a href="#events">Events</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="demo-btn">
              <FaCalendarCheck className="icon" />
              Book a Demo
            </button>
            <span className="phone-number">
              <FaPhoneAlt className="icon" />
              +91 7093800994
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
