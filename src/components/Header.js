import React, { useEffect, useState } from "react";
import logo from "../assets/cograd-black-logo.webp";
import "./Header.scss";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
          <a href="#contact-us" className="contact-button">
            Contact Us
          </a>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#about-us" onClick={toggleSidebar}>About Us</a>
          <a href="#services" onClick={toggleSidebar}>Services</a>
          <a href="#resources" onClick={toggleSidebar}>Resources</a>
          <a href="#contact-us" onClick={toggleSidebar}>Contact Us</a>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
