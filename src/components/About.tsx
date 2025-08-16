import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We guarantee to not only meet, but exceed your expectations with every detail."
    },
    {
      icon: Clock,
      title: "Appointment Based",
      description: "Professional service scheduled at your convenience, ensuring dedicated attention."
    },
    {
      icon: Shield,
      title: "Honest & Reliable",
      description: "Transparent pricing, honest communication, and reliable service you can trust."
    }
  ];

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

              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">
                  We guarantee to exceed your expectations
                </span>
              </div>

              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Schedule Appointment
              </Button>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-card border-border hover:shadow-card transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;