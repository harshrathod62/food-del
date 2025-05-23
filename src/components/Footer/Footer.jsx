import React from "react";
// Removed assets import as images are no longer used for social icons or logo
// import { assets } from '../../assets/assets';
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
          {/* Brand Logo/Name - Using text for simplicity, as image assets were causing issues */}
          <a href="#" className="footer-brand-text">
              <span>Your</span>Brand
          </a>
          {/* Brand description */}
          <p>
            Crafting innovative solutions for a better tomorrow. We're dedicated to excellence and customer satisfaction.
          </p>
          {/* Social Media Icons (Font Awesome) */}
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
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
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              {/* Phone number */}
              <a href="tel:+11234567890"><i className="fas fa-phone-alt"></i> +1-123-456-7890</a>
            </li>
            <li>
              {/* Email address */}
              <a href="mailto:fastfood.customersupport"><i className="fas fa-envelope"></i> fastfood.customersupport</a>
            </li>
            <li>
              {/* Physical address */}
              <p><i className="fas fa-map-marker-alt"></i> Lasudiya Khas, MP, India</p>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div className="footer-content-newsletter">
          <h2>STAY CONNECTED</h2>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>

      </div>
      {/* Horizontal rule separating main content from copyright */}
      <hr className="footer-divider" />
      {/* Copyright notice with dynamic year */}
      <p className="footer-copyright">Copyright {currentYear} &copy; Your Brand. All rights Reserved</p>
    </footer>
  );
};

export default Footer;
