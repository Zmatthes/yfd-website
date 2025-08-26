import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-detailed-car.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png" 
          alt="Your Favorite Detailer logo - Professional mobile auto detailing Denver Metro Commerce City"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        
        {/* Text background blocks */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* This will contain the text content */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-white font-medium">Serving Denver Metro Area</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-logo tracking-wider drop-shadow-lg">
            YOUR FAVORITE
            <span className="text-transparent bg-gradient-accent bg-clip-text block">
              DETAILER
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow-md">
            "If you have the time, we have the shine!"
          </p>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Premium mobile automotive detailing services in Commerce City serving the entire Denver Metro area. 
            Professional ceramic coating, paint correction, and complete detailing that exceeds expectations every time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('quote-wizard')}
              className="group shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="luxury" 
              size="xl"
              onClick={() => scrollToSection('services')}
              className="shadow-xl"
            >
              View Services
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary drop-shadow-sm" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-sm">
              <span className="font-semibold">@your.favorite.detailer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;