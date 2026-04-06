import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import TrustBar from './components/TrustBar';
import PainSection from './components/PainSection';
import HowItWorks from './components/HowItWorks';
import CoreServices from './components/CoreServices';
import ResultsPreview from './components/ResultsPreview';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
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

export default App;
