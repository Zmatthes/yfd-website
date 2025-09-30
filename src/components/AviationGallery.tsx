import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft, Phone } from "lucide-react";
import aviationImage1 from "@/assets/aviation-1.jpg";
import aviationImage2 from "@/assets/aviation-2.jpg";
import aviationDetailingImage from "@/assets/aviation-detailing.webp";
import jetCleaning from "@/assets/jet-cleaning.jpg";
import aviationNew1 from "@/assets/aviation-new-1.jpg";
import aviationNew2 from "@/assets/aviation-new-2.jpg";
import aviationNew3 from "@/assets/aviation-new-3.jpg";
import aviationNew4 from "@/assets/aviation-new-4.jpg";
import aviationNew5 from "@/assets/aviation-new-5.jpg";
import aviationBeforeAfter1 from "@/assets/aviation-before-after-1.jpg";
import aviationBeforeAfter2 from "@/assets/aviation-before-after-2.jpg";
import aviationBeforeAfter3 from "@/assets/aviation-before-after-3.jpg";

const AviationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: aviationDetailingImage,
      alt: ""
    },
    {
      src: aviationImage1,
      alt: ""
    },
    {
      src: aviationImage2,
      alt: ""
    },
    {
      src: aviationNew1,
      alt: ""
    },
    {
      src: aviationNew2,
      alt: ""
    },
    {
      src: jetCleaning,
      alt: ""
    },
    {
      src: aviationNew3,
      alt: ""
    },
    {
      src: aviationNew4,
      alt: ""
    },
    {
      src: aviationNew5,
      alt: ""
    },
    {
      src: aviationBeforeAfter1,
      alt: ""
    },
    {
      src: aviationBeforeAfter2,
      alt: ""
    },
    {
      src: aviationBeforeAfter3,
      alt: ""
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const goBack = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="aviation-gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Button 
              variant="ghost" 
              onClick={goBack}
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Aviation Detailing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in meticulous cleaning and protective treatments for private aircraft, 
              helping you preserve both appearance and long-term value. Interior & exterior packages 
              tailored to your aircraft. Contact us today for a custom quote.
            </p>
          </div>

          {/* Service Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Interior Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Extensive cleaning of all cabin and cockpit surfaces</li>
                <li>• Leather care: deep cleaning, conditioning & protection</li>
                <li>• Carpet, fabric & upholstery restoration</li>
                <li>• Detailed treatment of wood, metal, and trim finishes</li>
                <li>• Sanitization of galleys, lavatories & high-touch areas</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Exterior Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Exterior dry-wash & degrease with aviation-safe products</li>
                <li>• Brightwork polishing, paint correction, and paint protection treatments</li>
                <li>• Landing gear, wheels & brake assemblies deep clean</li>
                <li>• De-icing boot restoration & surface protection</li>
              </ul>
            </div>
          </div>

          {/* Main Gallery */}
          <Card className="relative overflow-hidden bg-gradient-card border-border mb-8">
            <div className="relative h-96 md:h-[600px]">
              <img 
                src={images[currentIndex].src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm text-white/80">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img 
                  src={image.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Give Your Aircraft the Premium Treatment?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for a personalized quote based on your aircraft type and specific requirements. 
                Every aviation detailing project is custom-tailored to your aircraft, budget, and it's needs.
              </p>
              <Button 
                variant="destructive"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AviationGallery;