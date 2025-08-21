import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Car, Clock, Phone, ChevronLeft, ChevronRight } from "lucide-react";

type VehicleType = "2-door" | "4-door" | "mid-suv" | "truck" | "full-suv" | "motorcycle";
type ServiceType = "interior-exterior" | "vip-interior" | "vip-exterior";

const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [serviceMode, setServiceMode] = useState<"drop-off" | "mobile">("drop-off");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const servicePrices = {
    "interior-exterior": {
      "2-door": 250,
      "4-door": 300,
      "truck": 325,
      "full-suv": 350
    },
    "vip-interior": {
      "2-door": 200,
      "4-door": 225,
      "truck": 250,
      "full-suv": 275
    },
    "vip-exterior": {
      "2-door": 60,
      "4-door": 75,
      "truck": 100,
      "full-suv": 125,
      "motorcycle": 100
    }
  };

  const vehicleOptions = [
    { id: "3rd-row", label: "3rd Row Seating", price: 25 },
    { id: "oversized", label: "Oversized/Lifted", price: 20 },
    { id: "commercial", label: "Work/Commercial Use", price: 25 }
  ];

  const exteriorAddOns = [
    { id: "clay-bar", label: "Clay Bar", price: 25 },
    { id: "bug-removal", label: "Bug Removal", price: 10 }
  ];

  const interiorAddOns = [
    { id: "dog-hair", label: "Dog Hair Removal", price: 25 },
    { id: "engine-bay", label: "Engine Bay Detail", price: 30 },
    { id: "headlights", label: "Headlight Restoration", price: 100 }
  ];

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const calculateTotal = () => {
    let total = 0;
    
    if (vehicleType && serviceType) {
      total = servicePrices[serviceType][vehicleType] || 0;
    }
    
    selectedOptions.forEach(optionId => {
      const option = vehicleOptions.find(o => o.id === optionId);
      if (option) total += option.price;
    });

    selectedAddOns.forEach(addOnId => {
      const exteriorAddOn = exteriorAddOns.find(a => a.id === addOnId);
      const interiorAddOn = interiorAddOns.find(a => a.id === addOnId);
      const addOn = exteriorAddOn || interiorAddOn;
      if (addOn) total += addOn.price;
    });

    if (serviceMode === "mobile") total += 25;

    return total;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">What do you drive?</h2>
              <p className="text-muted-foreground">Tell us about your vehicle</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="year" className="font-display">Year</Label>
                <Input
                  id="year"
                  placeholder="2020"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="make" className="font-display">Make</Label>
                <Input
                  id="make"
                  placeholder="Toyota"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="model" className="font-display">Model</Label>
                <Input
                  id="model"
                  placeholder="Camry"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="text-lg font-display mb-4 block">Vehicle Type</Label>
              <RadioGroup 
                value={vehicleType || ""} 
                onValueChange={(value) => setVehicleType(value as VehicleType)}
                className="grid md:grid-cols-2 gap-4"
              >
                {["2-door", "4-door", "mid-suv", "truck", "full-suv", "motorcycle"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                        <span className="font-display">
                          {type === "2-door" ? "2 DOOR CAR" :
                           type === "4-door" ? "4 DOOR CAR" :
                           type === "mid-suv" ? "MID-SIZE SUV" :
                           type === "truck" ? "TRUCK" :
                           type === "full-suv" ? "SUV / HEAVY DUTY TRUCK" :
                           "MOTORCYCLE"}
                        </span>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Service Type</h2>
              <p className="text-muted-foreground">Choose your service package</p>
            </div>

            <RadioGroup value={serviceType || ""} onValueChange={(value) => setServiceType(value as ServiceType)}>
              <div className="space-y-6">
                {/* Interior & Exterior */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interior-exterior" id="interior-exterior" />
                    <Label htmlFor="interior-exterior" className="text-lg font-bold font-display">INTERIOR & EXTERIOR</Label>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex justify-between">
                      <span>2 DOOR CAR</span>
                      <span className="font-bold">$250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4 DOOR CAR / MID-SIZE SUV</span>
                      <span className="font-bold">$300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TRUCK</span>
                      <span className="font-bold">$325</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SUV / HEAVY DUTY TRUCK</span>
                      <span className="font-bold">$350</span>
                    </div>
                  </div>
                </div>

                {/* VIP Interior */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vip-interior" id="vip-interior" />
                    <Label htmlFor="vip-interior" className="text-lg font-bold font-display">VIP INTERIOR</Label>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex justify-between">
                      <span>2 DOOR CAR</span>
                      <span className="font-bold">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4 DOOR CAR / MID-SIZE SUV</span>
                      <span className="font-bold">$225</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TRUCK / HEAVY DUTY TRUCK</span>
                      <span className="font-bold">$250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SUV</span>
                      <span className="font-bold">$275</span>
                    </div>
                  </div>
                </div>

                {/* VIP Exterior */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vip-exterior" id="vip-exterior" />
                    <Label htmlFor="vip-exterior" className="text-lg font-bold font-display">VIP EXTERIOR</Label>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex justify-between">
                      <span>2 DOOR CAR</span>
                      <span className="font-bold">$60</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4 DOOR CAR / MID-SIZE SUV</span>
                      <span className="font-bold">$75</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TRUCK</span>
                      <span className="font-bold">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SUV / HEAVY DUTY TRUCK</span>
                      <span className="font-bold">$125</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MOTORCYCLE</span>
                      <span className="font-bold">$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Vehicle Options</h2>
              <p className="text-muted-foreground">Select any that apply to your vehicle</p>
            </div>

            <div className="space-y-4">
              {vehicleOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => toggleOption(option.id)}
                    className="rounded"
                  />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                      <span className="font-display">{option.label}</span>
                      <span className="font-bold text-primary">+${option.price}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Add-On Services</h2>
              <p className="text-muted-foreground">Optional services to enhance your detail</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Exterior Add-ons */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display">Exterior</h3>
                {exteriorAddOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="rounded"
                    />
                    <Label htmlFor={addOn.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                        <span className="font-display">{addOn.label}</span>
                        <span className="font-bold text-primary">+${addOn.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>

              {/* Interior Add-ons */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display">Interior</h3>
                {interiorAddOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="rounded"
                    />
                    <Label htmlFor={addOn.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                        <span className="font-display">{addOn.label}</span>
                        <span className="font-bold text-primary">+${addOn.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Service Location</h2>
              <p className="text-muted-foreground">Choose how you want service</p>
            </div>

            <RadioGroup value={serviceMode} onValueChange={(value) => setServiceMode(value as "drop-off" | "mobile")}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="drop-off" id="drop-off" />
                  <Label htmlFor="drop-off" className="cursor-pointer">
                    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50 min-w-[300px]">
                      <span className="font-display">Drop-Off at Shop</span>
                      <span className="font-bold text-primary">$0</span>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="cursor-pointer">
                    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50 min-w-[300px]">
                      <span className="font-display">Mobile Service</span>
                      <span className="font-bold text-primary">+$25</span>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Contact Information</h2>
              <p className="text-muted-foreground">How can we reach you?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="font-display">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-display">Phone *</Label>
                  <Input
                    id="phone"
                    placeholder="(303) 555-0123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-display">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Card className="p-6 bg-gradient-card">
                <h3 className="text-xl font-bold font-display mb-4">Quote Summary</h3>
                
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Base Service</span>
                      <span className="font-semibold">${vehicleType && serviceType ? servicePrices[serviceType][vehicleType] || 0 : 0}</span>
                    </div>
                  
                  {selectedOptions.map(optionId => {
                    const option = vehicleOptions.find(o => o.id === optionId);
                    return option ? (
                      <div key={optionId} className="flex justify-between items-center text-sm">
                        <span>{option.label}</span>
                        <span>+${option.price}</span>
                      </div>
                    ) : null;
                  })}

                    {selectedAddOns.map(addOnId => {
                      const exteriorAddOn = exteriorAddOns.find(a => a.id === addOnId);
                      const interiorAddOn = interiorAddOns.find(a => a.id === addOnId);
                      const addOn = exteriorAddOn || interiorAddOn;
                      return addOn ? (
                        <div key={addOnId} className="flex justify-between items-center text-sm">
                          <span>{addOn.label}</span>
                          <span>+${addOn.price}</span>
                        </div>
                      ) : null;
                    })}

                  {serviceMode === "mobile" && (
                    <div className="flex justify-between items-center text-sm">
                      <span>Mobile Service</span>
                      <span>+$25</span>
                    </div>
                  )}
                  
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="font-display">Total:</span>
                      <span className="text-primary font-display">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={() => {
                        window.location.href = "tel:+13038104626";
                      }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call to Book: (303) 810-4626
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Final pricing subject to in-person inspection
                </p>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="quote-wizard" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold font-display">Auto Detail Quote Builder</h1>
              <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="mb-12">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="text-center">
              <div className="bg-primary/10 rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Current Total: </span>
                <span className="font-bold text-primary font-display">${calculateTotal()}</span>
              </div>
            </div>

            <Button 
              variant={currentStep === totalSteps ? "hero" : "default"}
              onClick={nextStep}
              disabled={currentStep === totalSteps || (currentStep === 1 && !vehicleType) || (currentStep === 2 && !serviceType)}
            >
              {currentStep === totalSteps ? "Get Quote" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;