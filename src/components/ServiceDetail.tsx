import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

type VehicleType = "2-door" | "4-door" | "mid-suv" | "truck" | "suv" | "heavy-duty" | "van" | "motorcycle";
type ServiceDetailType = "ceramic-coating" | "paint-correction";

interface ServiceDetailProps {
  serviceType: ServiceDetailType;
  onBack: () => void;
  onContinue: (vehicleType: VehicleType, basePrice: number) => void;
}

const ServiceDetail = ({ serviceType, onBack, onContinue }: ServiceDetailProps) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);

  const vehiclePricing = {
    "ceramic-coating": {
      "2-door": { label: "2 Door Car", price: 650 },
      "4-door": { label: "4 Door Car/Small Truck", price: 700 },
      "mid-suv": { label: "Mid Size SUV", price: 750 },
      "truck": { label: "Truck", price: 850 },
      "suv": { label: "SUV", price: 950 },
      "heavy-duty": { label: "Heavy Duty Truck", price: 1050 },
      "van": { label: "Van", price: 950 },
      "motorcycle": { label: "Motorcycle", price: 650 }
    },
    "paint-correction": {
      "2-door": { label: "2 Door Car", price: 650 },
      "4-door": { label: "4 Door Car/Small Truck", price: 700 },
      "mid-suv": { label: "Mid Size SUV", price: 750 },
      "truck": { label: "Truck", price: 850 },
      "suv": { label: "SUV", price: 950 },
      "heavy-duty": { label: "Heavy Duty Truck", price: 1050 },
      "van": { label: "Van", price: 950 },
      "motorcycle": { label: "Motorcycle", price: 650 }
    }
  };

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  
  const addOns = [
    { id: "topper-shell", label: "Topper Shell", price: 100 },
    { id: "cargo-roof-box", label: "Cargo Roof Box", price: 60 }
  ];

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleContinue = () => {
    if (selectedVehicle) {
      const basePrice = vehiclePricing[serviceType][selectedVehicle].price;
      onContinue(selectedVehicle, basePrice);
    }
  };

  const getServiceContent = () => {
    if (serviceType === "ceramic-coating") {
      return {
        title: "What is Ceramic Coating?",
        description: "A ceramic coating is a liquid polymer that is applied by hand to the exterior of a vehicle. The coating chemically bonds with the vehicle's factory paint, creating a layer of protection. A ceramic coating is not a substitute for paint protection film, which provides more comprehensive protection. Instead, it is a premium wax alternative that provides superior protection and longevity.",
        features: [
          "Professional ceramic coating application to all exterior paint surfaces including wheels",
          "1-5 year protection (with proper maintenance)",
          "Extremely hydrophobic properties",
          "Protects paint from road grime and contaminants",
          "Enhanced gloss and depth of paint"
        ]
      };
    } else {
      return {
        title: "What is Paint Correction?",
        description: "Paint correction is the process of removing imperfections in a vehicle's finish and restoring it to a better than factory condition. These imperfections include but are not limited to, swirl marks, fine scratches, bird dropping etching, hologramming, and water spots. Paint correction involves leveling or removing a very small amount of clear coat or paint.",
        features: [
          "Multi-stage paint correction process",
          "Swirl mark and scratch removal",
          "Oxidation and contamination removal",
          "Headlight and trim restoration",
          "Enhanced paint clarity and depth"
        ]
      };
    }
  };

  const content = getServiceContent();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {content.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {content.description}
            </p>
          </div>

          {/* Vehicle Type Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Select Your Vehicle Type
            </h3>
            
            <RadioGroup 
              value={selectedVehicle || ""} 
              onValueChange={(value) => setSelectedVehicle(value as VehicleType)}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(vehiclePricing[serviceType]).map(([key, { label, price }]) => (
                  <div key={key} className="relative">
                    <RadioGroupItem
                      value={key}
                      id={key}
                      className="peer sr-only"
                    />
                     <Label
                       htmlFor={key}
                       className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all"
                     >
                      <span className="font-medium text-foreground">{label}</span>
                      <span className="text-primary font-bold">${price}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Add-ons */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Additional Options
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {addOns.map((addon) => (
                <div 
                  key={addon.id} 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border-2 ${
                    selectedAddOns.includes(addon.id) 
                      ? 'bg-primary/10 border-primary' 
                      : 'bg-muted/30 border-transparent hover:bg-muted/50'
                  }`}
                  onClick={() => toggleAddOn(addon.id)}
                >
                  <span className="text-foreground">{addon.label}</span>
                  <span className="text-primary font-semibold">+${addon.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Add-ons can be discussed during consultation
            </p>
          </div>

          {/* Service Details */}
          <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">Service Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Offer */}
          <div className="mb-8 p-6 bg-primary/10 rounded-lg">
            <p className="text-foreground font-semibold mb-2">Special Offer:</p>
            <p className="text-muted-foreground">
              Receive 50% off Interior Detail with booking of ceramic coating or paint correction. 
              All vehicles that receive this service are recommended to join our monthly maintenance program.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            
            <Button
              onClick={handleContinue}
              disabled={!selectedVehicle}
              className="flex items-center gap-2"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;