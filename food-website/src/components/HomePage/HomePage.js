import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate('/menu'); 
  };

  return (
    <div className="home-page">
      {}
      <img src="/logo/image.png" alt="NutriNest Logo" className="logo" />
      
      <h1>Welcome to NutriNest</h1>
      <p>Welcome to <strong>NutriNest</strong>, your ultimate destination for healthy and delicious meals.</p>

      <button className="explore-btn" onClick={handleExploreMenu}>
        Explore Our Menu
      </button>
    </div>
  );
};

export default HomePage;
