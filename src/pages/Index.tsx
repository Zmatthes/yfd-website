import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import QuoteWizard from "@/components/QuoteWizard";
import MonthlyMaintenance from "@/components/MonthlyMaintenance";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <MobileNav />
      <Hero />
      <div className="space-y-8">
        <About />
        <Services />
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
