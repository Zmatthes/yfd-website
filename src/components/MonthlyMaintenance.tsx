import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Calendar, Shield } from "lucide-react";

const MonthlyMaintenance = () => {
  const maintenancePackages = [
    {
      type: "2 Door Car",
      price: "$100",
      description: "Perfect for compact cars and coupes"
    },
    {
      type: "Motorcycle",
      price: "$100",
      description: "For motorcycles and bikes"
    },
    {
      type: "4 Door Car / Small Truck",
      price: "$120",
      description: "Ideal for sedans and small trucks"
    },
    {
      type: "Mid-Size SUV / Wagon",
      price: "$135", 
      description: "For mid-size SUVs and wagons",
      popular: true
    },
    {
      type: "Truck",
      price: "$145",
      description: "For pickup trucks"
    },
    {
      type: "SUV / Heavy Duty Truck / Van",
      price: "$150",
      description: "Large vehicles and commercial trucks"
    }
  ];

  const maintenanceFeatures = [
    "Hand wash with premium soap",
    "Wheel and tire cleaning",
    "Interior vacuum and wipe down",
    "Window cleaning inside and out", 
    "Ceramic coating maintenance",
    "Priority booking for additional services"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="monthly-maintenance" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-primary font-medium">Monthly Maintenance Program</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Keep Your Vehicle Looking Fresh
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Regular maintenance is essential for preserving your ceramic coating's performance and keeping your vehicle in pristine condition. 
              Our monthly program ensures your investment stays protected year-round.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* What's Included */}
            <div>
              <div className="flex items-center mb-8">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">What's Included</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {maintenanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Why Monthly Maintenance?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Proper maintenance is necessary to ensure your ceramic coating's longevity and performance. 
                  Regular care prevents contamination buildup and maintains the protective barrier that keeps your paint looking perfect.
                </p>
                <p className="text-muted-foreground">
                  Even without a ceramic coating, nothing beats the feeling of a freshly detailed car every month!
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Monthly Pricing
              </h3>
              
              <div className="space-y-4">
                {maintenancePackages.map((pkg, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-card border-border hover:shadow-luxury transition-smooth relative"
                  >
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {pkg.type}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">
                          {pkg.price}
                        </span>
                        <p className="text-sm text-muted-foreground">per month</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    *Mobile service fee not included. To get monthly maintenance pricing, it must be on a monthly basis, and the vehicle requires a Full Interior & Exterior Detail within a month of starting the program to ensure we are working with a clean slate.
                  </p>
                </div>
                
                <Button 
                  variant="hero"
                  size="lg"
                  onClick={scrollToContact}
                  className="shadow-xl"
                >
                  Join Maintenance Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyMaintenance;