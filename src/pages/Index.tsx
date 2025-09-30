import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 
import Gallery from "@/components/Gallery";
import AviationGallery from "@/components/AviationGallery";
import Pricing from "@/components/Pricing";
import QuoteWizard from "@/components/QuoteWizard";
import MonthlyMaintenance from "@/components/MonthlyMaintenance";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  const [showAviationGallery, setShowAviationGallery] = useState(false);

  useEffect(() => {
    const handleShowAviationGallery = () => {
      setShowAviationGallery(true);
    };

    const handleHideAviationGallery = () => {
      setShowAviationGallery(false);
    };

    window.addEventListener('show-aviation-gallery', handleShowAviationGallery);
    window.addEventListener('hide-aviation-gallery', handleHideAviationGallery);

    return () => {
      window.removeEventListener('show-aviation-gallery', handleShowAviationGallery);
      window.removeEventListener('hide-aviation-gallery', handleHideAviationGallery);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <MobileNav />
      <Hero />
      <div className="space-y-8">
        <About />
        <Services />
        {showAviationGallery && <AviationGallery />}
        <Gallery />
        <Pricing />
        <QuoteWizard />
        <MonthlyMaintenance />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
