import Navbar from "./components/Navbar";
import HeroSections from "./components/HeroSections";
import FeatureSection from "./components/FeatureSection";
import Workflowsection from "./components/Workflowsection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  // Create refs for each section
  const featuresRef = useRef(null);
  const workflowRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Pass all refs into Navbar via a single object
  const scrollRefs = {
    featuresRef,
    workflowRef,
    pricingRef,
    testimonialsRef,
  };

  return (
    <>
      <Navbar scrollRefs={scrollRefs} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSections />
        <div ref={featuresRef} className="scroll-mt-24">
          <FeatureSection />
        </div>
        <div ref={workflowRef} className="scroll-mt-24">
          <Workflowsection />
        </div>
        <div ref={pricingRef} className="scroll-mt-24">
          <PricingSection />
        </div>
        <div ref={testimonialsRef} className="scroll-mt-24">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
