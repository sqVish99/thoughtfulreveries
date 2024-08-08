import React, { useState } from 'react';
import './Home.css';
import BlogCard from '../../blogcard/Blogcard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const blogCards = Array.from({ length: 20 });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='homewrap'>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-bar'
      />
      <div className='home'>
        {blogCards.map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;