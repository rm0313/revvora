import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainSection from './components/PainSection';
import HowItWorks from './components/HowItWorks';
import CoreServices from './components/CoreServices';
import ResultsPreview from './components/ResultsPreview';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustBar />
      <PainSection />
      <HowItWorks />
      <CoreServices />
      <ResultsPreview />
      <Pricing />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
