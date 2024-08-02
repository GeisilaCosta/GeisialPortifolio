import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Languages from './components/Languages';
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
      <Route path="/languages" element={<Languages />} />
    </Routes>
    <Footer />
  </AuthProvider>
);

export default App;
