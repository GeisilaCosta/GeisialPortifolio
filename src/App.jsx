import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import { AuthProvider } from './context/AutContext';



const App = () => (
  <AuthProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      
    </Routes>
    <Footer />
  </AuthProvider>
);

export default App;