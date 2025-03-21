import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HeroSection from "./pages/Home/HeroSection";
import TrainingHome from './pages/getaways/trainings/TrainingHome';
import Getaways from './pages/getaways/Getaways';
import About from './pages/about/About';
import CorporateEvent from './pages/corporateevent/CorporateEvent';
import AdventureToursDetails from './pages/getaways/Adventuretours/AdventureToursDetails';
import Contact from './pages/contact/Contact';
import Details from './pages/getaways/details/Details';
import TermsConditions from './pages/company/terms&conditions/TermsConditions';
import RefundPolicy from './pages/company/refund-policy/RefundPolicy';
import PrivacyPolicy from './pages/company/privacy-policy/PrivacyPolicy';

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
