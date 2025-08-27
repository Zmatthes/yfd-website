import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Camera } from "lucide-react";

const Gallery = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/your.favorite.detailer/', '_blank', 'noopener,noreferrer');
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See the dramatic transformations and attention to detail that make us Denver's 
              favorite automotive detailing service.
            </p>
          </div>

          {/* Gallery Grid - All Transformation Photos */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                { src: '/lovable-uploads/c69fc324-772a-40f9-ba6c-30d415cab15e.png', alt: 'Jeep floor mat cleaning transformation before and after Denver mobile detailing service' },
                { src: '/lovable-uploads/aa258f0a-05e3-41d4-b750-a2b53d2f8fba.png', alt: 'Vehicle interior seat cleaning before and after Commerce City professional detailing' },
                { src: '/lovable-uploads/a62b8403-66d2-47a0-aed8-69fc36ab6b05.png', alt: 'Complete vehicle interior detailing transformation Your Favorite Detailer Denver' },
                { src: '/lovable-uploads/2fc18210-7a41-441b-960a-0b162fcc16b5.png', alt: 'Jeep rubber floor mat restoration before after Denver Metro detailing service' },
                { src: '/lovable-uploads/7bd6cc3f-8d37-4a93-8291-e192b451010a.png', alt: 'Professional vehicle interior cleaning transformation Commerce City auto detailing' },
                { src: '/lovable-uploads/24ac8cf9-dab3-4fc1-a78b-82f448baa1fe.png', alt: 'Honda CR-V exterior wash and detail before after Denver mobile service' },
                { src: '/lovable-uploads/10e9f03f-e8a0-42fb-965a-5dfb34fa659c.png', alt: 'Black car exterior detailing transformation before after Your Favorite Detailer' }
              ].map((image, i) => (
                <div 
                  key={i}
                  className="aspect-square bg-muted/50 rounded-lg hover:scale-105 transition-transform cursor-pointer group overflow-hidden"
                  onClick={openInstagram}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;