import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HeroSection from "./pages/home/HeroSection";
import TrainingHome from './pages/getaways/trainings/TrainingHome';
import Getaways from './pages/getaways/Getaways';
import CorporateEvent from './pages/corporateevent/CorporateEvent';
import AdventureToursDetails from './pages/getaways/Adventuretours/AdventureToursDetails';
import Contact from './pages/contact/Contact';
import RefundPolicy from './pages/company/refund-policy/RefundPolicy';
import PrivacyPolicy from './pages/company/privacy-policy/PrivacyPolicy';
import TermsConditions from './pages/Company/terms&conditions/TermsConditions';
import Details from './pages/Getaways/details/Details';
import About from './pages/About/About';

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
