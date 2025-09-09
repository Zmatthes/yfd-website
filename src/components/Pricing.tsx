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
    },
    {
      name: "Restore & Protect Detail",
      price: "$800-1,200",
      description: "The most in-depth exterior service we offer",
      features: [
        "Multi-stage paint correction",
        "Swirl mark & scratch removal",
        "Oxidation removal",
        "Professional ceramic coating",
        "Headlight restoration",
        "Trim restoration",
        "Paint depth & gloss restoration",
        "Years of protection",
        "50% off Interior Detail"
      ],
      popular: false,
      duration: "1-3 days",
      isRestoreProtect: true
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


          {/* Restore & Protect Detail Description */}
          <div className="bg-gradient-card rounded-2xl p-8 mb-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              About the Restore & Protect Detail
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Restore & Protect Detail is for somebody who wants the most out of their vehicle's appearance. 
                This is the most in-depth service we offer for the exterior of the vehicle. The goal is to restore 
                the overall gloss, depth, and color of the vehicle's paint by removing oxidation, swirl marks, 
                contaminants, light scratches, and marring.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                After getting the paint corrected, it will be paired with a durable, easy to maintain ceramic 
                coating to ensure the paint is refreshed, protected and looking good for years to come. 
                Pair with our Interior & Exterior Detail to completely restore your vehicle to the best condition possible.
              </p>
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-foreground font-semibold mb-2">Special Offer:</p>
                <p className="text-muted-foreground">
                  Receive 50% off Interior Detail with booking of Restore & Protect Detail. 
                  All vehicles that receive this service are recommended to join our monthly maintenance program.
                </p>
              </div>
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