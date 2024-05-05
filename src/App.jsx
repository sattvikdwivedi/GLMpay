import React from 'react';
import Home from './components/Home';
import AboutUsPage from './components/AboutUs';
import ContactUsPage from './components/ContactUs';
import PrivacyPolicyPage from './components/PrivacyPolicy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Careers from './components/Careers';
import OurTeams from './components/OurTeams';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PartnerUS from './components/PartnerUS';
import Terms from './components/Terms';
import TermsUs from './components/TermsUs';
import FAQ from './components/FAQ';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/OurTeams" element={<OurTeams />} />
        <Route path="/PartnerUs" element={<PartnerUS />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="TermUs" element={<TermsUs />} />
        <Route path="FAQ" element={<FAQ/>}/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
