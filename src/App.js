import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;