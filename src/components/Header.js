import React, { useEffect, useState } from "react";
import logo from "../assets/cograd-black-logo.webp";
import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  console.log(isScrolled)

  return (
    <header className={`header ${!isScrolled ? "fixed" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Cograd Logo" />
      </div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#resources">Resources</a>
      </nav>
      <div className="button-container">
        <span href="#contact-us" className="contact-button">
          Contact Us
        </span>
      </div>
    </header>
  );
};

export default Header;
