import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Detail",
      price: "$80",
      description: "Perfect for regular maintenance",
      features: [
        "Exterior hand wash & dry",
        "Interior vacuum",
        "Window cleaning",
        "Tire cleaning",
        "Dashboard wipe down"
      ],
      popular: false,
      duration: "2-3 hours"
    },
    {
      name: "Premium Detail",
      price: "$150",
      description: "Our most popular package",
      features: [
        "Everything in Basic Detail",
        "Clay bar treatment",
        "Paint wax application",
        "Leather conditioning",
        "Fabric protection",
        "Engine bay cleaning"
      ],
      popular: true,
      duration: "4-5 hours"
    },
    {
      name: "Ultimate Detail",
      price: "$250",
      description: "The complete luxury experience",
      features: [
        "Everything in Premium Detail",
        "Paint correction (light)",
        "Ceramic coating prep",
        "Headlight restoration",
        "Trim restoration",
        "Interior deep cleaning",
        "6-month protection"
      ],
      popular: false,
      duration: "6-8 hours"
    }
  ];

  const addOns = [
    { service: "Ceramic Coating", price: "$400-800" },
    { service: "Paint Correction", price: "$200-600" },
    { service: "Engine Detail", price: "$75" },
    { service: "Headlight Restoration", price: "$60" },
    { service: "Pet Hair Removal", price: "$50" },
    { service: "Odor Elimination", price: "$75" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no surprises. Choose the package that's right for your vehicle 
              and budget. All prices include materials and equipment.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative p-8 bg-gradient-card border-border hover:shadow-luxury transition-smooth ${
                  pkg.popular ? 'ring-2 ring-primary/50 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Duration: {pkg.duration}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "hero" : "luxury"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Book {pkg.name}
                </Button>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Add-On Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-card rounded-lg border border-border"
                >
                  <span className="text-foreground font-medium">{addon.service}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                All add-ons can be combined with any package for additional value.
              </p>
              <Button 
                variant="minimal"
                onClick={scrollToContact}
              >
                Request Custom Quote
              </Button>
            </div>
          </div>

          {/* Mobile Service Note */}
          <div className="text-center mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Mobile Service Available
            </h4>
            <p className="text-muted-foreground">
              All services available at your location throughout the Denver Metro area. 
              Mobile service fee may apply depending on distance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;