import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import { Home, ProjectGallery, Contact } from './components/Pages';
import './App.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/portfolio' element={<ProjectGallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
