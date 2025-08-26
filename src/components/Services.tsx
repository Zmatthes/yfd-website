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
      description: "Complete exterior detailing with professional techniques and premium products.",
      features: [
        "Hand Wash of Exterior", 
        "Deep Clean of Wheels & Wheel Wells", 
        "6 Month Paint Sealant Applied To Paint & Wheels For Protection & Hydrophobicity", 
        "Tire Shine Applied (No Tire Shine Can Be Requested)"
      ],
      popular: false,
      image: "/lovable-uploads/d6f938e6-fa9e-41ec-b29b-65c1759c5109.png"
    },
    {
      icon: Sparkles,
      title: "Interior Detailing", 
      description: "Deep interior cleaning that removes 99.9% of germs and bacteria with steam cleaning.",
      features: [
        "Vacuum of Interior Including Trunk", 
        "Deep Clean of ALL Interior Surfaces with Steam Effectively Removing 99.9% of Germs and Bacteria", 
        "Shampoo Carpets", 
        "Shampoo Seats", 
        "Glass Cleaned", 
        "Leather / Plastics Conditioned", 
        "Door Jams Cleaned"
      ],
      popular: false,
      image: "/lovable-uploads/281f810c-9383-4f71-865c-87b7f0c75a91.png"
    },
    {
      icon: Brush,
      title: "Paint Correction",
      description: "Professional paint correction to remove swirl marks, scratches, and restore paint clarity.",
      features: ["Swirl removal", "Tree sap removal", "Clay bar treatment", "Ceramic coating highly recommended for optimal results"],
      popular: false,
      image: "/lovable-uploads/55de000b-9398-4de3-a167-332e88c75bda.png"
    },
    {
      icon: Droplet,
      title: "Ceramic Coating",
      description: "Long-lasting ceramic coating protection for superior paint protection and easy maintenance.",
      features: ["1-5 year protection (with proper maintenance)", "Extremely hydrophobic properties", "Protects paint from road grime"],
      popular: false,
      image: "/lovable-uploads/3d321eca-bb73-442b-b36d-4599afcaa1a7.png"
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
              From routine monthly cleanings to deep restorative work, we offer full interior and exterior detailing designed to protect your investment and keep your vehicle looking its best. Whether it's stain removal, odor treatment, paint care, or a complete interior refresh, every service is tailored to the condition of your car, truck, or SUV.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden bg-gradient-card border-border hover:shadow-luxury transition-smooth group cursor-pointer ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} professional transformation by Your Favorite Detailer`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex flex-col h-full">
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
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;