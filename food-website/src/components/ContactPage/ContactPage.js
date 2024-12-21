import React from 'react';
import './Contactpage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {}
      <img src="/logo/image.png" alt="NutriNest Logo" className="logo" />

      <h1>Contact Us</h1>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p><strong>Phone:</strong> +91-9398181513</p>
        <p><strong>Email:</strong> hemanth21624@gmail.com</p>
        <p><strong>Address:</strong> Sahyadri College of Engineering ,Manglore,</p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {}
      <div className="map-container">
  <h2>Our Location</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.9206794598863!2d74.92537760000002!3d12.866579599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20Of%20Engineering%20%26%20Management%20(Autonomous)!5e1!3m2!1sen!2sin!4v1734755127801!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Sahyadri College Location"
  ></iframe>
</div>

    </div>
  );
};

export default ContactPage;
