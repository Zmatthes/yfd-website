import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Use the uploaded before/after images
const beforeAfter1 = "/lovable-uploads/9efe2697-fc17-4dad-9e42-85ecb959afd9.png";
const beforeAfter2 = "/lovable-uploads/b27f11cd-e924-4747-a35e-f4c8f1d03195.png";
const beforeAfter3 = "/lovable-uploads/e038490e-e179-4949-9ecf-f05ed59d82f4.png";
const beforeAfter4 = "/lovable-uploads/78eee3c6-b987-4d73-abe0-027c68842b3e.png";
const beforeAfter5 = "/lovable-uploads/54387e23-2161-4189-aaae-449d2bdeda26.png";
const beforeAfter6 = "/lovable-uploads/84408e06-20d5-4323-85f8-690a274489a2.png";
const beforeAfter7 = "/lovable-uploads/a4721bde-4e71-41e3-836f-7f23bdc64318.png";
const beforeAfter8 = "/lovable-uploads/1c325991-263e-41c9-9670-4f8aecb105cb.png";
const beforeAfter9 = "/lovable-uploads/de98b512-b6cc-4163-9dbd-f027cfebc2a8.png";
const beforeAfter10 = "/lovable-uploads/c1dfd628-32fa-443f-bbd5-833d9a400951.png";

const transformations = [
  {
    id: 1,
    image: beforeAfter1,
    title: "Exterior Paint Restoration",
    description: "Complete paint decontamination and protection"
  },
  {
    id: 2,
    image: beforeAfter2,
    title: "Engine Bay Deep Clean",
    description: "Professional engine bay detailing and protection"
  },
  {
    id: 3,
    image: beforeAfter3,
    title: "Floor Mat Restoration",
    description: "Deep cleaning and sanitization of floor mats"
  },
  {
    id: 4,
    image: beforeAfter4,
    title: "Floor Mat Deep Clean",
    description: "Removal of dirt, debris, and stains"
  },
  {
    id: 5,
    image: beforeAfter5,
    title: "Headlight Restoration",
    description: "Crystal clear headlight restoration service"
  },
  {
    id: 6,
    image: beforeAfter6,
    title: "Interior Console Detailing",
    description: "Leather conditioning and deep cleaning"
  },
  {
    id: 7,
    image: beforeAfter7,
    title: "Complete Floor Transformation",
    description: "From neglected to pristine condition"
  },
  {
    id: 8,
    image: beforeAfter8,
    title: "Floor Mat Rejuvenation",
    description: "Professional cleaning and restoration"
  },
  {
    id: 9,
    image: beforeAfter9,
    title: "Interior Cabin Detailing",
    description: "Complete interior transformation"
  },
  {
    id: 10,
    image: beforeAfter10,
    title: "Trunk Area Restoration",
    description: "Deep cleaning of cargo areas"
  }
];

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTransformation = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const currentTransformation = transformations[currentIndex];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="before-after" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Dramatic Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible before and after results from our professional detailing services. 
            Every vehicle tells a story of transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-card border-border">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTransformation}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTransformation}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Main Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={currentTransformation.image}
                alt={currentTransformation.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Transformation Info */}
            <div className="p-6 bg-background">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                {currentTransformation.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {currentTransformation.description}
              </p>
              
              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mb-6">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <div className="text-center">
                <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
                  Get Your Transformation
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
          {transformations.map((transformation, index) => (
            <button
              key={transformation.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-primary scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={transformation.image}
                alt={transformation.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;