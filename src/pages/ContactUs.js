import React, { useState } from "react";
import "./ContactUs.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    how: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_wo4smcd', // replace with your service ID
      'template_k0ifw7i', // replace with your template ID
      formData,
      'n-n62XZBnXR0TXlQj' // replace with your user ID
    ).then((result) => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          how: '',
          message: ''
        })

        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Cograd</title>
        <meta
          name="description"
          content="Get in touch with Cograd for innovative and affordable education solutions. Discover our vision, services, and partnership opportunities. Contact us now for more information."
        />
      </Helmet>
      <Header />
      <div className="contact-section">
        <div className="overlay"></div>
        <div className="contact-container">
          <div className="contact-form">
            <h2>
              Get in <span>Touch</span>
            </h2>
            <p>
              We are here to assist you with any inquiries you may have. Please
              fill out the form below and we'll get back to you shortly.
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
              <input type="text" name="phone" placeholder="Your Phone Number (optional)" onChange={handleChange} />
              <select name="how" onChange={handleChange}>
                <option value="">How did you find us?</option>
                <option value="google">Google</option>
                <option value="social">Social Media</option>
                <option value="friend">From a Friend</option>
              </select>
              <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
              <button type="submit">SEND</button>
            </form>
            <div className="contact-info">
              <p>
                <strong>PHONE</strong>
                <br />
                +91 8917307407
              </p>
              <p>
                <strong>EMAIL</strong>
                <br />
                connect@cograd.in
              </p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.1026232006907!2d77.42057248950003!3d28.563598858474233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef00384ca85f%3A0x5ac41558b8334d2a!2sCograd%20Tech%20Village!5e0!3m2!1sen!2sin!4v1719158047209!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
