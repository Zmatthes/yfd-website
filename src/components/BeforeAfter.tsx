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
const beforeAfter11 = "/lovable-uploads/6763c307-adf8-4383-bdce-92d99720bdfc.png";
const beforeAfter12 = "/lovable-uploads/19702e00-7ef4-41b5-8d55-d4d8f3933bb6.png";
const beforeAfter13 = "/lovable-uploads/ddeabaf0-3ef9-42fe-8a91-08aaadcc1f13.png";
const beforeAfter14 = "/lovable-uploads/6d91d324-3fc1-468f-be7f-e00f473b9879.png";
const beforeAfter15 = "/lovable-uploads/64d8407b-7d86-4f44-b27c-25164cf89363.png";
const beforeAfter16 = "/lovable-uploads/72b986d9-0299-4c2e-8950-077f36b9e534.png";
const beforeAfter17 = "/lovable-uploads/da9a4062-23f4-4a28-8275-9f3af9f2b233.png";
const beforeAfter18 = "/lovable-uploads/c4a62878-854e-47d0-8f45-5d85832f0f70.png";
const beforeAfter19 = "/lovable-uploads/4e87b7e2-c6f2-40de-9103-a81eb34cfe12.png";
const beforeAfter20 = "/lovable-uploads/2947a2f9-0114-4f8b-8328-90defdfaa615.png";
const beforeAfter21 = "/lovable-uploads/ce9d2ea1-ab36-4092-a38e-a06122769006.png";
const beforeAfter22 = "/lovable-uploads/6ee1bb36-5ada-4e81-acc8-b8a6b4d37687.png";
const beforeAfter23 = "/lovable-uploads/56496434-2531-4ca6-8a8c-ef162dde4f1b.png";
const beforeAfter24 = "/lovable-uploads/4f3fc79b-9a51-4225-81a9-bfc7f3b0feb9.png";
const beforeAfter25 = "/lovable-uploads/e47b845d-e6f0-439d-b5d2-e4ec406a1b59.png";
const beforeAfter26 = "/lovable-uploads/254ddb32-2a46-4cf0-b8ed-251abcd109c3.png";
const beforeAfter27 = "/lovable-uploads/065f0a56-5345-4df8-b680-8d20947446a9.png";
const beforeAfter28 = "/lovable-uploads/be8ba91a-95ad-4b7b-b75c-7004a72370b4.png";
const beforeAfter29 = "/lovable-uploads/42983910-9c3d-4af2-9640-79fa6841ca85.png";
const beforeAfter30 = "/lovable-uploads/2d4da362-1900-4dd7-aa13-b5d1bce1f751.png";
const beforeAfter31 = "/lovable-uploads/1dee44ec-18e0-40dd-a213-fd82464a4206.png";
const beforeAfter32 = "/lovable-uploads/a8d2e74e-4d17-452d-ac10-c40625c794af.png";
const beforeAfter33 = "/lovable-uploads/80689d22-9a42-4cdf-9d88-e362735ea462.png";
const beforeAfter34 = "/lovable-uploads/ff1cf1be-2e26-4635-97d9-12fc816dfec1.png";
const beforeAfter35 = "/lovable-uploads/475fd47e-ae04-4437-981e-c385e7723791.png";
const beforeAfter36 = "/lovable-uploads/b0fbff2f-7732-4bb8-8dfe-644476bc422c.png";
const beforeAfter37 = "/lovable-uploads/41e84014-de8f-48c6-899b-889c012a2c14.png";

const transformations = [
  { id: 1, image: beforeAfter1 },
  { id: 2, image: beforeAfter2 },
  { id: 3, image: beforeAfter3 },
  { id: 4, image: beforeAfter4 },
  { id: 5, image: beforeAfter5 },
  { id: 6, image: beforeAfter6 },
  { id: 7, image: beforeAfter7 },
  { id: 8, image: beforeAfter8 },
  { id: 9, image: beforeAfter9 },
  { id: 10, image: beforeAfter10 },
  { id: 11, image: beforeAfter11 },
  { id: 12, image: beforeAfter12 },
  { id: 13, image: beforeAfter13 },
  { id: 14, image: beforeAfter14 },
  { id: 15, image: beforeAfter15 },
  { id: 16, image: beforeAfter16 },
  { id: 17, image: beforeAfter17 },
  { id: 18, image: beforeAfter18 },
  { id: 19, image: beforeAfter19 },
  { id: 20, image: beforeAfter20 },
  { id: 21, image: beforeAfter21 },
  { id: 22, image: beforeAfter22 },
  { id: 23, image: beforeAfter23 },
  { id: 24, image: beforeAfter24 },
  { id: 25, image: beforeAfter25 },
  { id: 26, image: beforeAfter26 },
  { id: 27, image: beforeAfter27 },
  { id: 28, image: beforeAfter28 },
  { id: 29, image: beforeAfter29 },
  { id: 30, image: beforeAfter30 },
  { id: 31, image: beforeAfter31 },
  { id: 32, image: beforeAfter32 },
  { id: 33, image: beforeAfter33 },
  { id: 34, image: beforeAfter34 },
  { id: 35, image: beforeAfter35 },
  { id: 36, image: beforeAfter36 },
  { id: 37, image: beforeAfter37 }
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
            <div className="w-full bg-background flex justify-center">
              <img
                src={currentTransformation.image}
                alt={`Transformation ${currentIndex + 1}`}
                className="max-w-[90%] h-auto object-contain"
              />
            </div>

            {/* Navigation Info */}
            <div className="p-6 bg-background border-t border-border">
              <div className="text-center text-muted-foreground mb-4">
                Image {currentIndex + 1} of {transformations.length}
              </div>
              
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
      </div>
    </section>
  );
};

export default BeforeAfter;