import React from "react";
import "./Footer.scss";
import logo from "../assets/logo-white.webp"; // Replace with the path to your logo
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <img src={logo} alt="Cograd Logo" className="footer-logo" />
          <p>Get In Touch</p>
          <p>Phone: +91-9601234567</p>
          <p>Email: support@cograd.com</p>
          <p>Address: cograd tech village, bisarkh jalalpur, noida, UP</p>
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
            <a href="https://www.facebook.com/cograd.in/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/cograd_in" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://in.linkedin.com/company/cograd" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/cograd.in" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/c/cograd" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
