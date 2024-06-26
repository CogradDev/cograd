import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using React Router
import logo from "../assets/cograd-blue-logo.webp";
import "./Header.scss";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation(); // Get the current pathname using React Router

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
          <a href="/"><img src={logo} alt="Cograd Logo" /></a>
        </div>
        <nav className="navigation">
          <a href="/" className={pathname === "/" ? "active" : ""}>Home</a>
          <a href="/about-us" className={pathname === "/about-us" ? "active" : ""}>About Us</a>
          <a href="/services" className={pathname === "/services" ? "active" : ""}>Services</a>
          {/* <a href="#resources" className={pathname === "#resources" ? "active" : ""}>Resources</a> */}
        </nav>
        <div className="button-container">
          <a href="/contact-us" className="contact-button">
            Contact Us
          </a>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <a href="/" onClick={toggleSidebar}>Home</a>
          <a href="/about-us" onClick={toggleSidebar}>About Us</a>
          <a href="/services" onClick={toggleSidebar}>Services</a>
          {/* <a href="#resources" onClick={toggleSidebar}>Resources</a> */}
          <a href="/contact-us" onClick={toggleSidebar}>Contact Us</a>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
