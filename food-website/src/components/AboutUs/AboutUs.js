import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {}
      <header className="about-us-header">
        <img src="/logo/image.png" alt="NutriNest Logo" className="about-us-logo" />
        <h1>About Us</h1>
        <p>Welcome to <strong>NutriNest</strong>, your ultimate destination for healthy and delicious meals.</p>
      </header>

      {}
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>NutriNest</strong>, we are dedicated to providing nutritious, flavorful, and sustainable
          food that caters to all dietary preferences.
        </p>
      </section>

      {}
      <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/ch1.jpeg" alt="Chef mohammed ashiq" className="team-photo" />
            <h3>Chef Mohammed ashiq</h3>
            <p>Head Chef with a passion for creating healthy, delicious meals,2020 Masterchef winner.</p>
          </div>
          <div className="team-member">
            <img src="/images/ch2.jpg" alt="Chef Sanjeev Kapoor" className="team-photo" />
            <h3>Chef Sanjeev Kapoor</h3>
            <p>Pastry expert specializing in guilt-free desserts.</p>
          </div>
        </div>
      </section>

      {}
      <section className="about-us-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Fresh Ingredients:</strong> We prioritize locally sourced and organic ingredients.</li>
          <li><strong>Customer-Centric:</strong> Your satisfaction and health are our top priorities.</li>
          <li><strong>Sustainability:</strong> We believe in reducing our environmental footprint.</li>
        </ul>
      </section>

      {}
      <footer className="about-us-footer">
        <p>&copy; 2024 NutriNest. All rights reserved.</p>
        <p>Follow us on:</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default AboutUs;
