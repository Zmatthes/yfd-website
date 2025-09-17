import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="hero"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="shadow-lg"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('quote-wizard')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Build Quote
              </button>
              <button 
                onClick={() => scrollToSection('monthly-maintenance')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Monthly Maintenance
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-smooth font-display p-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;