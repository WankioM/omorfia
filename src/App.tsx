import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Laser from './pages/Laser';
import Facial from './pages/Facial';
import Peels from './pages/Peels';
import PermanentTattoo from './pages/PermanentTattoo';
import SpaTreatments from './pages/SpaTreatments';
import PriceList from './pages/PriceList';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Specials from './pages/Specials';
import Contact from './pages/Contact';
import OurTeam from './pages/OurTeam';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';

const LandingPage = () => {
  return (
    <>
      <Home />
      <OurTeam />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/laser" element={<Laser />} />
            <Route path="/facial" element={<Facial />} />
            <Route path="/peels" element={<Peels />} />
            <Route path="/permanent-tattoo" element={<PermanentTattoo />} />
            <Route path="/spa-treatments" element={<SpaTreatments />} />
            <Route path="/price-list" element={<PriceList />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;