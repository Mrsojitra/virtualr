import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSections from "./components/HeroSections";
import FeatureSection from "./components/FeatureSection";
import Workflowsection from "./components/Workflowsection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSections />
        <FeatureSection/>
        <Workflowsection/>
        <PricingSection/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
