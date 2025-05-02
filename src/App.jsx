import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Services from './pages/Services';
import Blog from './pages/BlogPage';
import Contact from './pages/ContactPage';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';

function App() {
  return (
    <Router>
      <div className="">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;