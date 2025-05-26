// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import OopsSection from './components/OopsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MyKraeg from './components/MyKraeg'; // Import your new subpage

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <OopsSection />
                <Gallery />
              </>
            }
          />
          <Route path="/my-kraeg" element={<MyKraeg />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
