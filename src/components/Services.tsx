import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Sparkles, 
  Shield, 
  Brush, 
  Droplet, 
  Smartphone,
  Plane
} from "lucide-react";
import aviationImage from "@/assets/aviation-detailing.webp";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Exterior Detailing",
      description: "Complete multi-stage wash including bug and tar removal, wheels including wheel wells, and fender liners, followed by a safe two-bucket hand wash. Tires are dressed, trim is renewed, and a 6-month professional paint sealant is applied to both paint and wheels for lasting protection, hydrophobicity, and a deep, glossy finish.",
      features: [],
      popular: false,
      image: "/lovable-uploads/d6f938e6-fa9e-41ec-b29b-65c1759c5109.png"
    },
    {
      icon: Sparkles,
      title: "Interior Detailing", 
      description: "Give your vehicle a true reset. Our restorative interior detail goes far beyond a standard cleaning, targeting years of buildup, stains, odors, and wear. We deep clean every surface — carpets, seats, vents, trim, and headliner — using professional tools and extraction methods to lift out dirt and refresh fabrics. Leather and vinyl are reconditioned, plastics are restored, and hard-to-reach areas get the same attention as the obvious ones.",
      features: [],
      popular: false,
      image: "/lovable-uploads/281f810c-9383-4f71-865c-87b7f0c75a91.png"
    },
    {
      icon: Brush,
      title: "Paint Correction",
      description: "Paint correction is the process of safely removing surface imperfections — like swirl marks, light scratches, oxidation, water spots, and haze — to restore depth, clarity, and gloss to your vehicle's finish. Using professional compounds, polishers, and lighting, we carefully level the clear coat to reveal a smooth, mirror-like surface.\n\nThis service goes beyond a wax or sealant; it permanently improves the paint by removing defects rather than covering them up. Perfect for anyone wanting to revive dull, tired paint or prepare their vehicle for ceramic coating.",
      features: [],
      popular: false,
      image: "/lovable-uploads/55de000b-9398-4de3-a167-332e88c75bda.png"
    },
    {
      icon: Droplet,
      title: "Ceramic Coating",
      description: "Ceramic coating creates a semi-permanent, glass-like layer of protection that bonds directly to your vehicle's paint. It guards against UV damage, chemicals, and environmental fallout while adding unmatched gloss and slickness. Your vehicle stays cleaner longer, water beads effortlessly, and washing becomes easier than ever.",
      features: [],
      popular: false,
      image: "/lovable-uploads/3d321eca-bb73-442b-b36d-4599afcaa1a7.png"
    },
    {
      icon: Plane,
      title: "Aviation Detailing",
      description: "Professional aircraft detailing services for both interior and exterior. We specialize in comprehensive cleaning and protection for private aircraft, ensuring your investment maintains its pristine condition and value.",
      features: [],
      popular: false,
      image: aviationImage,
      isAviation: true
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

          {/* Mobile Service Note */}
          <div className="text-center mb-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Mobile Service Available
            </h4>
            <p className="text-muted-foreground">
              All services available at your location throughout the Denver Metro area. 
              Mobile service fee may apply depending on distance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden bg-gradient-card border-border hover:shadow-luxury transition-smooth group cursor-pointer h-full flex flex-col ${
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

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-col h-full">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                       <div className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {service.isAviation && (
                        <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
                          <p className="text-sm font-medium text-primary mb-2">
                            Interior and Exterior Services Available
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Contact us for a personalized quote based on your aircraft type and specific requirements.
                          </p>
                        </div>
                      )}

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
                      variant="destructive"
                      className="w-full mt-auto"
                      onClick={() => {
                        if (service.isAviation) {
                          scrollToContact();
                        } else {
                          const element = document.getElementById('quote-wizard');
                          element?.scrollIntoView({ behavior: 'smooth' });
                          
                          // Navigate to specific section based on service
                          setTimeout(() => {
                            if (service.title === "Paint Correction" || service.title === "Ceramic Coating") {
                              // Will be handled by the quote wizard to show ceramic/paint correction landing
                              const event = new CustomEvent('navigate-to-ceramic-paint');
                              window.dispatchEvent(event);
                            }
                            // Interior and Exterior detailing will go to normal flow (vehicle selection first)
                          }, 100);
                        }
                      }}
                    >
                      {service.isAviation ? "Call for Quote" : "Get Quote"}
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