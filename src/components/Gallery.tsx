import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import detailExterior1 from "@/assets/detail-exterior-1.png";
import detailWork1 from "@/assets/detail-work-1.jpg";
import detailWork2 from "@/assets/detail-work-2.jpg";
import detailWork3 from "@/assets/detail-work-3.jpg";
import hangarDetail from "@/assets/hangar-detail.jpg";
import jetCleaning from "@/assets/jet-cleaning.jpg";
import jetDetail from "@/assets/jet-detail.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: '/lovable-uploads/c69fc324-772a-40f9-ba6c-30d415cab15e.png' },
    { src: '/lovable-uploads/aa258f0a-05e3-41d4-b750-a2b53d2f8fba.png' },
    { src: '/lovable-uploads/a62b8403-66d2-47a0-aed8-69fc36ab6b05.png' },
    { src: '/lovable-uploads/7bd6cc3f-8d37-4a93-8291-e192b451010a.png' },
    { src: '/lovable-uploads/24ac8cf9-dab3-4fc1-a78b-82f448baa1fe.png' },
    { src: '/lovable-uploads/10e9f03f-e8a0-42fb-965a-5dfb34fa659c.png' },
    { src: '/lovable-uploads/50196e7d-e181-45cd-88e7-c3ee3124143c.png' },
    { src: '/lovable-uploads/c1dfd628-32fa-443f-bbd5-833d9a400951.png' }
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
              <div className="relative w-full max-w-4xl mx-auto min-h-[400px] flex items-center justify-center">
                <img 
                  src={images[currentIndex].src} 
                  alt=""
                  className="max-w-full max-h-[600px] w-auto h-auto object-contain"
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
                onClick={openInstagram}
              >
                <Instagram className="w-4 h-4 mr-2" />
                See More on Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;