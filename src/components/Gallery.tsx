import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Camera } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items - in a real implementation, these would come from Instagram API
  const galleryItems = [
    {
      id: 1,
      type: "before-after",
      title: "BMW 3 Series Full Detail",
      description: "Complete transformation with paint correction and ceramic coating"
    },
    {
      id: 2,
      type: "interior",
      title: "Leather Interior Restoration",
      description: "Deep cleaning and conditioning brought this interior back to life"
    },
    {
      id: 3,
      type: "exterior",
      title: "Mercedes AMG Polish",
      description: "Perfect paint correction revealing the true depth of black paint"
    },
    {
      id: 4,
      type: "engine",
      title: "Engine Bay Detail",
      description: "Thorough engine bay cleaning and dressing for a showroom finish"
    },
    {
      id: 5,
      type: "wheels",
      title: "Wheel & Tire Detail",
      description: "Professional wheel cleaning and tire dressing for that perfect finish"
    },
    {
      id: 6,
      type: "full-car",
      title: "Audi A4 Complete Detail",
      description: "Full service detail - interior, exterior, and engine bay"
    }
  ];

  const openInstagram = () => {
    window.open('https://instagram.com/your.favorite.detailer', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              See the dramatic transformations and attention to detail that make us Denver's 
              favorite automotive detailing service.
            </p>
            
            {/* Instagram Link */}
            <Button 
              variant="hero"
              onClick={openInstagram}
              className="group"
            >
              <Instagram className="h-5 w-5" />
              Follow @your.favorite.detailer
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="group overflow-hidden bg-gradient-card border-border hover:shadow-luxury transition-smooth cursor-pointer"
              >
                {/* Placeholder Image Area */}
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <Camera className="h-16 w-16 text-muted-foreground/50" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-primary/90 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                    {item.type.replace('-', ' ')}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Instagram Feed Section */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Live Instagram Feed
              </h3>
              <p className="text-muted-foreground">
                Follow our Instagram for daily before & after shots, tips, and behind-the-scenes content.
              </p>
            </div>

            {/* Instagram Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div 
                  key={index}
                  className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center hover:scale-105 transition-bounce cursor-pointer"
                  onClick={openInstagram}
                >
                  <Instagram className="h-8 w-8 text-muted-foreground/50" />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="luxury"
                onClick={openInstagram}
              >
                View Full Feed on Instagram
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see your vehicle transformed? Book your appointment today!
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Your Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;