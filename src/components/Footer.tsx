import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your Favorite Detailer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                "If you have the time, we have the shine!" Serving the Denver Metro area 
                with premium automotive detailing services that exceed expectations.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="minimal" 
                  size="icon"
                  onClick={() => window.location.href = 'https://www.instagram.com/your.favorite.detailer/'}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="minimal" 
                  size="icon"
                  onClick={() => window.open('tel:(303)810-4626', '_blank')}
                >
                  <Phone className="h-5 w-5" />
                </Button>
                <Button 
                  variant="minimal" 
                  size="icon"
                  onClick={() => window.open('mailto:zachmatthes@yahoo.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Services', id: 'services' },
                  { name: 'Pricing', id: 'pricing' },
                  { name: 'Gallery', id: 'gallery' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">Commerce City, Denver</p>
                    <p className="text-sm text-muted-foreground">Serving Denver Metro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:(303)810-4626" 
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    (303) 810-4626
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:zachmatthes@yahoo.com" 
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    zachmatthes@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Your Favorite Detailer. Made with</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>in Denver, Colorado.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;