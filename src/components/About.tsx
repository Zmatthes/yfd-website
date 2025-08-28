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
            {/* Content */}
            <div className="space-y-8 max-w-4xl mx-auto text-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  About Your Favorite Detailer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Located in Commerce City and serving the entire Denver Metro area, we specialize in 
                  both location-based and mobile detailing services. Our commitment to excellence and 
                  customer satisfaction has made us the go-to choice for automotive enthusiasts and 
                  everyday drivers alike.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We pride ourselves on honest communication, transparent pricing, and delivering 
                  results that exceed expectations. Every vehicle receives our full attention and 
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
        </div>
      </div>
    </section>
  );
};

export default About;