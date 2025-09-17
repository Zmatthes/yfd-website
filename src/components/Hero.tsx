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
              {/* Dirty/hidden logo base */}
              <div className="relative max-w-full max-h-[80vh] w-auto h-auto">
                <img 
                  src="/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png" 
                  alt="Your Favorite Detailer logo"
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain opacity-20 blur-[2px] grayscale"
                />
                
                {/* Clean logo with simple glow animation */}
                <img 
                  src="/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png" 
                  alt="Your Favorite Detailer logo - Professional mobile auto detailing Denver Metro Commerce City"
                  className="absolute inset-0 max-w-full max-h-[80vh] w-auto h-auto object-contain drop-shadow-2xl animate-red-glow-pulse"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Luxurious Intro Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="animate-fade-in">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight font-logo tracking-wider">
              YOUR FAVORITE
              <span className="text-transparent bg-gradient-accent bg-clip-text block">
                DETAILER
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium italic">
              "If you have the time, we have the shine!"
            </p>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 mb-10 shadow-lg">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground font-medium">Serving Denver Metro Area</span>
            </div>

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
                Get Quote
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
            <div className="flex items-center justify-center text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;