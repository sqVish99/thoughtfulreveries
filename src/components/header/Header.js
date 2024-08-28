import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header>
      <h1 className='header-content' onClick={handleClick}>Thoughtful Reveries</h1>
    </header>
  );
};

export default Header;