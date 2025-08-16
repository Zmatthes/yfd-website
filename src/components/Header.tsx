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
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-foreground">Your Favorite Detailer</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
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
            onClick={() => scrollToSection('contact')}
          >
            <Phone className="h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;