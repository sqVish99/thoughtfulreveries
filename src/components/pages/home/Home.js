import React, { useState } from "react";
import "./Home.css";
import BlogCard from "../../blogcard/Blogcard";
import { FaSearch } from "react-icons/fa";
import { debounce } from "../../../utils/utils";
import BlogData from "../../../data/BlogData";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(BlogData);

  const debouncedSearch = debounce((term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = BlogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowercasedTerm) ||
        blog.content.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredBlogs(filtered);
  }, 500);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

  return (
    <div className="homewrap">
      <div className="searchcontainer">
        <FaSearch className="searchicon" />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="searchbar"
        />
      </div>
      <div className="home">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
