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

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarSection/>
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/bikingeventshome" element={<BikingEventHome />} />
            <Route path="/traininghome" element={<TrainingHome/>} />
            <Route path="/adventure-tours" element={<AdventureToursHome />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
