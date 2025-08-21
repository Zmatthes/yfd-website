import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Sparkles, 
  Shield, 
  Brush, 
  Droplet, 
  Smartphone 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Exterior Detailing",
      description: "Complete exterior wash, clay bar treatment, polish, and protective wax application for a showroom shine.",
      features: ["Hand wash & dry", "Clay bar treatment", "Paint polish", "Protective wax", "Tire & rim cleaning"],
      popular: false
    },
    {
      icon: Sparkles,
      title: "Interior Detailing", 
      description: "Deep interior cleaning including vacuuming, leather treatment, fabric protection, and dashboard care.",
      features: ["Deep vacuum", "Leather conditioning", "Fabric protection", "Dashboard treatment", "Window cleaning"],
      popular: false
    },
    {
      icon: Shield,
      title: "Full Detail Package",
      description: "Complete interior and exterior detailing for the ultimate automotive care experience.",
      features: ["Complete exterior detail", "Complete interior detail", "Engine bay cleaning", "Headlight restoration", "Paint protection"],
      popular: true
    },
    {
      icon: Brush,
      title: "Paint Correction",
      description: "Professional paint correction to remove swirl marks, scratches, and restore paint clarity.",
      features: ["Swirl mark removal", "Scratch correction", "Paint restoration", "Multi-stage polishing", "Protection application"],
      popular: false
    },
    {
      icon: Droplet,
      title: "Ceramic Coating",
      description: "Long-lasting ceramic coating protection for superior paint protection and easy maintenance.",
      features: ["Paint preparation", "Ceramic application", "Curing process", "2-year protection", "Hydrophobic finish"],
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile Detailing",
      description: "We come to you! Professional detailing services at your home, office, or preferred location.",
      features: ["On-site service", "Full equipment", "Water & power included", "Flexible scheduling", "Denver Metro area"],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I take my time, I don't do half details, there are levels to it and I am everybody's favorite for a reason.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative p-8 bg-gradient-card border-border hover:shadow-luxury transition-smooth group cursor-pointer ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <Button 
                    variant={service.popular ? "hero" : "luxury"}
                    className="w-full mt-auto"
                    onClick={() => {
                      const element = document.getElementById('quote-wizard');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Need a custom package?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;