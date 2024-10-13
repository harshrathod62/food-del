import React from "react";
import { assets } from '../../assets/assets'
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo1} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            incidunt doloremque obcaecati natus odio error earum architecto
            quis, voluptate, sequi sed harum officia iste assumenda pariatur in
            quos? Eum, ducimus.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}  />
            <img src={assets.twitter_icon}  />
            <img src={assets.linkedin_icon}  />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-123-456-7890</li>
                <li>harshraj@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Harshraj.com - All rights Reserved</p>
    </div>
  );
};

export default Footer;
