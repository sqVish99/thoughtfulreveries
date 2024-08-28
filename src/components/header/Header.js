import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import LeftArrow from '../../assets/icons/left-arrow.svg';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <header>
      {location.pathname !== '/' && (
        <div className="back-button" onClick={handleBackClick}>
          <img src={LeftArrow} className="back-arrow-icon" />
        </div>
      )}
      <h1 className='header-content' onClick={handleClick}>Thoughtful Reveries</h1>
    </header>
  );
};

export default Header;