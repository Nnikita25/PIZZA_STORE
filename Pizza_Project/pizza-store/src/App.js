// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<DisplayAllItems />} />
          <Route path="/add-item" element={<AddNewItem />} />
          <Route path="/update-item/:id" element={<UpdateItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
