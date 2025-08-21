import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 
import QuoteWizard from "@/components/QuoteWizard";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <QuoteWizard />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
