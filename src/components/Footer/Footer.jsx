import React from "react";
// Re-import assets as images are now used for app download icons
import { assets } from '../../assets/assets'; 

// Importing the dedicated CSS file
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Main footer container
    <footer className="footer" id="footer">
      {/* Footer content wrapper */}
      <div className="footer-content">
        {/* Column 1: Brand Info & Social Icons */}
        <div className="footer-content-left">
          {/* Brand Logo/Name - Enhanced with modern styling */}
          <a href="#" className="footer-brand-text">
            <div className="brand-logo">
              <span className="brand-icon">🍔</span>
              <div className="brand-name">
                <span className="brand-your">Fast</span>
                <span className="brand-brand">Food</span>
              </div>
            </div>
          </a>
          {/* Brand description */}
          <p className="brand-description">
            Crafting innovative solutions for a better tomorrow. We're dedicated to excellence and customer satisfaction.
          </p>
          {/* Social Media Icons (Font Awesome) */}
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Get In Touch / Contact Info */}
        <div className="footer-content-right">
          <h2>Help & Support</h2>
          <ul>
            <li className="contact-item">
              {/* Phone number */}
              <a href="tel:+11234567890">
                <i className="fas fa-phone-alt contact-icon"></i> 
                <span>+1-123-456-7890</span>
              </a>
            </li>
            <li className="contact-item">
              {/* Email address */}
              <a href="mailto:fastfood.customersupport">
                <i className="fas fa-envelope contact-icon"></i> 
                <span>fastfood.customersupport</span>
              </a>
            </li>
            <li className="contact-item">
              {/* Physical address */}
              <p>
                <i className="fas fa-map-marker-alt contact-icon"></i> 
                <span>Lasudiya Khas, MP, India</span>
              </p>
            </li>
          </ul>
        </div>

        {/* New Column for App Download - Now using image logos */}
        <div className="footer-content-app-download">
          <h2>DOWNLOAD OUR APP</h2>
          <p>For a better experience, download our mobile app:</p>
          <div className="app-download-platforms"> {/* Reverted to app-download-platforms */}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={assets.play_store} alt="Download on Google Play" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={assets.app_store} alt="Download on Apple App Store" />
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div className="footer-content-newsletter">
          <h2>STAY CONNECTED</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-button">
                <i className="fas fa-paper-plane"></i>
                Subscribe
              </button>
            </div>
          </form>
        </div>

      </div>
      {/* Horizontal rule separating main content from copyright */}
      <hr className="footer-divider" />
      {/* Copyright notice with dynamic year */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright {currentYear} &copy; Fast Food. All rights Reserved
        </p>
        <div className="footer-legal-links">
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
