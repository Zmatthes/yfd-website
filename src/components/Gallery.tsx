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

          {/* Instagram Grid - 9 Most Recent Posts */}
          <div className="mb-16">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
              {[
                { src: '/lovable-uploads/9efe2697-fc17-4dad-9e42-85ecb959afd9.png', alt: 'Professional car transformation before and after Denver mobile detailing service' },
                { src: '/lovable-uploads/b27f11cd-e924-4747-a35e-f4c8f1d03195.png', alt: 'Luxury vehicle interior and exterior detailing Commerce City professional results' },
                { src: '/lovable-uploads/e038490e-e179-4949-9ecf-f05ed59d82f4.png', alt: 'Premium auto detailing transformation Your Favorite Detailer Denver Metro' },
                { src: '/lovable-uploads/78eee3c6-b987-4d73-abe0-027c68842b3e.png', alt: 'Professional vehicle restoration detailing work Denver automotive care' },
                { src: '/lovable-uploads/54387e23-2161-4189-aaae-449d2bdeda26.png', alt: 'Expert car cleaning and detailing transformation Commerce City mobile service' },
                { src: '/lovable-uploads/84408e06-20d5-4323-85f8-690a274489a2.png', alt: 'High-end vehicle detailing before and after Denver Metro professional results' },
                { src: '/lovable-uploads/a4721bde-4e71-41e3-836f-7f23bdc64318.png', alt: 'Comprehensive auto detailing transformation Your Favorite Detailer showcase' },
                { src: '/lovable-uploads/1c325991-263e-41c9-9670-4f8aecb105cb.png', alt: 'Professional automotive detailing excellence Denver mobile car care service' },
                { src: '/lovable-uploads/de98b512-b6cc-4163-9dbd-f027cfebc2a8.png', alt: 'Premium vehicle transformation detailing Commerce City professional quality work' }
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
                onClick={openInstagram}
                className="group"
              >
                See More on Instagram
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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