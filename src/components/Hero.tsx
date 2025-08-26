import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-detailed-car.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-16">
        {/* Clean Logo Display */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-4xl mx-auto animate-fade-in flex items-center justify-center">
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-accent opacity-15 blur-3xl scale-110 animate-glow-pulse"></div>
              
              <img 
                src="/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png" 
                alt="Your Favorite Detailer logo - Professional mobile auto detailing Denver Metro Commerce City"
                className="relative max-w-full max-h-[80vh] w-auto h-auto object-contain drop-shadow-2xl animate-float hover:scale-105 transition-transform duration-700 cursor-pointer"
              />
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Luxurious Intro Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 mb-8 shadow-lg">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground font-medium">Serving Denver Metro Area</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight font-logo tracking-wider">
              YOUR FAVORITE
              <span className="text-transparent bg-gradient-accent bg-clip-text block">
                DETAILER
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-muted-foreground mb-10 font-medium italic">
              "If you have the time, we have the shine!"
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium mobile automotive detailing services in Commerce City serving the entire Denver Metro area. 
              Professional ceramic coating, paint correction, and complete detailing that exceeds expectations every time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => {
                  const element = document.getElementById('quote-wizard');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group shadow-xl hover-scale"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="luxury" 
                size="xl"
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="shadow-xl hover-scale"
              >
                View Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold">5.0 Rating</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-lg">
                <span className="font-semibold">@your.favorite.detailer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;