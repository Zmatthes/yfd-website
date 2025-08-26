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
                { src: '/lovable-uploads/ee308bcf-7014-42ad-8fa4-5a0fbbaeff49.png', alt: 'Professional car polisher applying ceramic coating Denver mobile detailing service' },
                { src: '/lovable-uploads/3300c18b-599e-473e-b173-f9832690f626.png', alt: 'Premium auto detailing equipment cart Commerce City professional car care tools' },
                { src: '/lovable-uploads/367e242d-3174-4725-a363-95da1535aada.png', alt: 'Classic Chevrolet restoration detail work Denver vintage car detailing specialist' },
                { src: '/lovable-uploads/d34ba8a6-ed4b-4664-b442-513875ab6db2.png', alt: 'Hand washing red Mazda luxury vehicle exterior detailing Denver Metro car wash' },
                { src: '/lovable-uploads/9626f2b6-a2d6-433d-bae5-b75502ea32cc.png', alt: 'Detailed tire and wheel cleaning before and after automotive detailing Denver' },
                { src: '/lovable-uploads/5b02c5ab-56c0-4076-ab2b-582d0394eefa.png', alt: 'Premium purple paint finish ceramic coating protection Denver auto detailing' },
                { src: '/lovable-uploads/ee308bcf-7014-42ad-8fa4-5a0fbbaeff49.png', alt: 'Professional polishing technique paint correction Denver Metro car detailing' },
                { src: '/lovable-uploads/3300c18b-599e-473e-b173-f9832690f626.png', alt: 'Mobile detailing cart setup Commerce City on-site professional car care' },
                { src: '/lovable-uploads/367e242d-3174-4725-a363-95da1535aada.png', alt: 'Classic car detailing showcase Your Favorite Detailer Denver vintage restoration' }
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