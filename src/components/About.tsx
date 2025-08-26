import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const About = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  About Your Favorite Detailer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Located in Commerce City and serving the entire Denver Metro area, I specialize in 
                  both location-based and mobile detailing services. My commitment to excellence and 
                  customer satisfaction has made me the go-to choice for automotive enthusiasts and 
                  everyday drivers alike.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I pride myself on honest communication, transparent pricing, and delivering 
                  results that exceed expectations. Every vehicle receives my full attention and 
                  professional care, ensuring your car looks better than the day you bought it.
                </p>
              </div>

              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('testimonials');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group"
              >
                See Testimonials
              </Button>
            </div>

            {/* Professional Photo Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden group">
                  <img 
                    src="/lovable-uploads/254ddb32-2a46-4cf0-b8ed-251abcd109c3.png" 
                    alt="Professional Jeep steering wheel detailing transformation Denver"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-lg overflow-hidden group">
                  <img 
                    src="/lovable-uploads/4f3fc79b-9a51-4225-81a9-bfc7f3b0feb9.png" 
                    alt="Mazda floor mat cleaning before and after Denver auto detailing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-lg overflow-hidden group">
                  <img 
                    src="/lovable-uploads/a8d2e74e-4d17-452d-ac10-c40625c794af.png" 
                    alt="Professional wheel cleaning transformation Denver mobile detailing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden group">
                  <img 
                    src="/lovable-uploads/6ee1bb36-5ada-4e81-acc8-b8a6b4d37687.png" 
                    alt="Interior door panel cleaning professional auto detailing Denver"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;