import React from "react";
import "./Footer.scss";
import logo from "../assets/logo-white.webp"; // Replace with the path to your logo
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <img src={logo} alt="Cograd Logo" className="footer-logo" />
          <p>Get In Touch</p>
          <p>Phone: +91-</p>
          <p>Email:</p>
          <p>Address:</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p>About us</p>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Resources</p>
          <p>Blogs</p>
          <p>Careers</p>
        </div>
        <div className="footer-section app-promotion">
          <p>
            Learn more about Cograd and learn seamlessly through our mobile app.
            Download Now!
          </p>
          <button className="download-button">Download on Google Play</button>
          <div className="social-media">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
