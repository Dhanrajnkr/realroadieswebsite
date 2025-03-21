import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HeroSection from "./pages/Home/HeroSection";
import TrainingHome from './pages/Getaways/trainings/TrainingHome';
import Getaways from './pages/Getaways/Getaways';
import About from './pages/About/About';
import CorporateEvent from './pages/Corporateevent/CorporateEvent';
import AdventureToursDetails from './pages/Getaways/Adventuretours/AdventureToursDetails';
import Contact from './pages/Contact/Contact';
import Details from './pages/Getaways/details/Details';
import TermsConditions from './pages/Company/terms&conditions/TermsConditions';
import RefundPolicy from './pages/Company/refund-policy/RefundPolicy';
import PrivacyPolicy from './pages/Company/privacy-policy/PrivacyPolicy';

const App=() => {
  return (
    <Router>
      <div className="App">
        <NavbarSection/>
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/getaways/*" element={<Getaways />} />
            <Route path="/bikingevents/details/:id" element={<Details />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/traininghome" element={<TrainingHome/>} />
            <Route path="/adventure-tours" element={<AdventureToursDetails />} />
            <Route path="/corporateevent" element={<CorporateEvent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </main> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
