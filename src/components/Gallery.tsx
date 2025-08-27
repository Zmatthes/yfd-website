import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: '/lovable-uploads/c69fc324-772a-40f9-ba6c-30d415cab15e.png', alt: 'Jeep floor mat cleaning transformation before and after Denver mobile detailing service' },
    { src: '/lovable-uploads/aa258f0a-05e3-41d4-b750-a2b53d2f8fba.png', alt: 'Vehicle interior seat cleaning before and after Commerce City professional detailing' },
    { src: '/lovable-uploads/a62b8403-66d2-47a0-aed8-69fc36ab6b05.png', alt: 'Complete vehicle interior detailing transformation Your Favorite Detailer Denver' },
    { src: '/lovable-uploads/2fc18210-7a41-441b-960a-0b162fcc16b5.png', alt: 'Jeep rubber floor mat restoration before after Denver Metro detailing service' },
    { src: '/lovable-uploads/7bd6cc3f-8d37-4a93-8291-e192b451010a.png', alt: 'Professional vehicle interior cleaning transformation Commerce City auto detailing' },
    { src: '/lovable-uploads/24ac8cf9-dab3-4fc1-a78b-82f448baa1fe.png', alt: 'Honda CR-V exterior wash and detail before after Denver mobile service' },
    { src: '/lovable-uploads/10e9f03f-e8a0-42fb-965a-5dfb34fa659c.png', alt: 'Black car exterior detailing transformation before after Your Favorite Detailer' },
    { src: '/lovable-uploads/559036ff-7056-4dd3-b111-325e7772d9ea.png', alt: 'Vehicle trim and molding restoration before after Denver professional detailing' },
    { src: '/lovable-uploads/df092f52-3cc8-4f20-8a7a-677ef40ad9da.png', alt: 'Center console cup holder cleaning transformation Commerce City mobile detailing' },
    { src: '/lovable-uploads/4fada073-13d0-45b4-a42d-65d25bd1908f.png', alt: 'Volkswagen steering wheel and dashboard cleaning before after Denver service' },
    { src: '/lovable-uploads/a1d9292e-cdc5-4f39-bf41-6d97e9c98930.png', alt: 'Vehicle dashboard and gauge cluster detailing Your Favorite Detailer transformation' },
    { src: '/lovable-uploads/3c1b1d48-acc4-4043-bb17-d06253c3ca5b.png', alt: 'Subaru floor mat and interior cleaning before after Commerce City professional work' },
    { src: '/lovable-uploads/e74162a9-5848-4f56-ba0a-908ff290916f.png', alt: 'Air conditioning vent cleaning transformation Denver Metro mobile detailing service' },
    { src: '/lovable-uploads/50196e7d-e181-45cd-88e7-c3ee3124143c.png', alt: 'Vehicle cup holder deep cleaning before after Your Favorite Detailer results' },
    { src: '/lovable-uploads/61e8cba7-bb33-4f52-8de5-b2d7ac6717a4.png', alt: 'Tundra floor mat restoration and cleaning Commerce City professional detailing' }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

          {/* Slideshow */}
          <div className="mb-16">
            <Card className="relative overflow-hidden bg-background border-border shadow-lg">
              {/* Main Image */}
              <div className="relative aspect-[16/10] max-w-4xl mx-auto">
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </Card>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="text-center mt-8">
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