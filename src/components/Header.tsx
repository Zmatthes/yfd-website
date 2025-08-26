import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png" 
            alt="Your Favorite Detailer Logo - Professional Mobile Auto Detailing Denver Metro"
            className="h-10 w-10"
          />
          <h1 className="text-xl font-bold text-foreground font-display">Your Favorite Detailer</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-foreground transition-smooth font-display"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('quote-wizard')}
            className="text-muted-foreground hover:text-foreground transition-smooth font-display"
          >
            Build Quote
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-muted-foreground hover:text-foreground transition-smooth font-display"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-smooth font-display"
          >
            Contact
          </button>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Denver Metro</span>
          </div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('quote-wizard')}
          >
            <Phone className="h-4 w-4" />
            Build Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;