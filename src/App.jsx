import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BikingEventHome from './pages/getaways/bikingevents/BikingEventHome';
import HeroSection from './pages/Home/HeroSection';
import TrainingHome from './pages/getaways/trainings/TrainingHome';
import AdventureToursHome from './pages/getaways/Adventuretours/AdventureToursHome';
import Getaways from './pages/getaways/Getaways';
import About from './pages/about/About';
import CorporateEvent from './pages/corporateevent/CorporateEvent';
import AdventureToursDetails from './pages/getaways/Adventuretours/AdventureToursDetails';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarSection/>
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/getaways/*" element={<Getaways />} />
            <Route path="/bikingeventshome" element={<BikingEventHome />} />
            <Route path="/traininghome" element={<TrainingHome/>} />
            <Route path="/adventure-tours" element={<AdventureToursDetails />} />
            <Route path="/corporateevent" element={<CorporateEvent />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
