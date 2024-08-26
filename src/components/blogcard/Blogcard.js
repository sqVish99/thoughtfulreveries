import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogcard.css';

const BlogCard = ({id, title, content}) => {
  const history = useNavigate();

  const handleClick = () => {
    history(`/blog/${id}`);
  };

  return (
    <div className='blogwrap' data-id={id} onClick={handleClick}>
      <h2 className='blog-title'>{title}</h2>
      <p className='blog-content'>{content}</p>
    </div>
  );
};

export default BlogCard;