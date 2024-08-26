import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../../../data/BlogData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }
  
  const className = blog.type === 'poem' ? 'blog-content-poem' : 'blog-content-detail';
  const formattedContent = blog.content.replace(/\n/g, '<br>');

  return (
    <div className='blog-detail'>
      <h1 className='blog-title-detail'>{blog.title}</h1>
      <p className={className} dangerouslySetInnerHTML={{ __html: formattedContent }} />
    </div>
  );
};

export default BlogDetail;