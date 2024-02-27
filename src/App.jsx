import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, ProjectGallery, Contact, Custom404 } from './components/Pages';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/portfolio' element={<ProjectGallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<Custom404 />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
