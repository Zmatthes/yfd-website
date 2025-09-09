import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

type VehicleType = "2-door" | "4-door" | "mid-suv" | "truck" | "full-suv" | "heavy-duty" | "motorcycle";

interface RestoreProtectDetailProps {
  onBack: () => void;
  onContinue: (vehicleType: VehicleType, basePrice: number) => void;
}

const RestoreProtectDetail = ({ onBack, onContinue }: RestoreProtectDetailProps) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);

  const vehiclePricing = {
    "2-door": { label: "2 Door Car", price: 650 },
    "4-door": { label: "4 Door Car/Small Truck", price: 700 },
    "mid-suv": { label: "Mid Size SUV", price: 750 },
    "truck": { label: "Truck", price: 900 },
    "full-suv": { label: "SUV", price: 1000 },
    "heavy-duty": { label: "Heavy Duty Truck/Van", price: 1100 }
  };

  const addOns = [
    { id: "topper-shell", label: "Topper Shell", price: 100 },
    { id: "cargo-roof-box", label: "Cargo Roof Box", price: 60 }
  ];

  const handleContinue = () => {
    if (selectedVehicle) {
      const basePrice = vehiclePricing[selectedVehicle].price;
      onContinue(selectedVehicle, basePrice);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About the Restore & Protect Detail
            </h1>
            <p className="text-muted-foreground text-lg">
              The most in-depth service we offer for the exterior of the vehicle
            </p>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The Restore & Protect Detail is for somebody who wants the most out of their vehicle's appearance. 
              This is the most in-depth service we offer for the exterior of the vehicle. The goal is to restore 
              the overall gloss, depth, and color of the vehicle's paint by removing oxidation, swirl marks, 
              contaminants, light scratches, and marring.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              After getting the paint corrected, it will be paired with a durable, easy to maintain ceramic 
              coating to ensure the paint is refreshed, protected and looking good for years to come. 
              Pair with our Interior & Exterior Detail to completely restore your vehicle to the best condition possible.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Special Offer:</p>
              <p className="text-muted-foreground">
                Receive 50% off Interior Detail with booking of Restore & Protect Detail. 
                All vehicles that receive this service are recommended to join our monthly maintenance program.
              </p>
            </div>
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
                {Object.entries(vehiclePricing).map(([key, { label, price }]) => (
                  <div key={key} className="relative">
                    <RadioGroupItem
                      value={key}
                      id={key}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={key}
                      className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
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
                <div key={addon.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
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
            <h4 className="font-semibold text-foreground mb-3">Service Duration & Process</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Multi-stage paint correction and swirl mark removal</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Professional ceramic coating application</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Headlight and trim restoration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>1-3 days depending on vehicle condition</span>
              </li>
            </ul>
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

export default RestoreProtectDetail;