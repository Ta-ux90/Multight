import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Home from './Components/Home';
import Blog from './Components/Blog';
import ContactUs from './Components/contactUs';
import CategoryPage from './Components/CategoriesPage';
import Collection from './Components/collection';
import AboutUs from './Components/aboutUs';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;