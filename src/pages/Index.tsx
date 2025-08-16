import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 
import QuoteBuilder from "@/components/QuoteBuilder";
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
      <QuoteBuilder />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
