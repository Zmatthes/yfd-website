import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Car, Clock, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Configuration object for all pricing and rules
const CONFIG = {
  basePrices: {
    "2-door": 250,
    "4-door": 300,
    "truck": 325,
    "full-suv": 350
  },
  vehicleOptions: [
    { id: "3rd-row", label: "3rd Row Seating", price: 25 },
    { id: "oversized", label: "Oversized/Lifted (tires >33\" or roof >78\")", price: 25 },
    { id: "commercial", label: "Work/Commercial Use", price: 25 }
  ],
  conditionPricing: {
    petHair: { none: 0, light: 25, moderate: 50, heavy: 100 },
    odor: { none: 0, mild: 30, strong: 75 },
    stains: { none: 0, spot: 30, multiple: 75, severe: 150 },
    dirt: { none: 0, light: 25, heavy: 60 },
    kids: { none: 0, yes: 25 }
  },
  addOns: [
    { id: "engine-bay", label: "Engine Bay Detail", price: 40, time: 0.3 },
    { id: "headlights", label: "Headlight Restoration (pair)", price: 60, time: 0.6 },
    { id: "shampoo", label: "Carpet/Mat Shampoo", price: 50, time: 0.6 },
    { id: "leather", label: "Leather Clean & Condition", price: 35, time: 0.3 },
    { id: "clay-bar", label: "Clay Bar + Sealant/Wax", price: 50, time: 0.8 },
    { id: "ozone", label: "Ozone Odor Treatment", price: 50, time: 1.0 },
    { id: "water-spots", label: "Water Spot Removal", price: 40, time: 0.4 },
    { id: "ceramic", label: "Ceramic/Coating Consultation", price: 0, time: 0, note: "Priced after inspection" }
  ],
  baseTimes: {
    "2-door": 3.5,
    "4-door": 4.0,
    "truck": 4.5,
    "full-suv": 5.0
  },
  conditionTimes: {
    light: 0.25,
    moderate: 0.5,
    heavy: 1.0,
    severe: 1.0
  },
  mobileService: {
    baseRadius: 10,
    baseFee: 25,
    perMileRate: 1.50,
    generatorFee: 15
  }
};

type VehicleType = "2-door" | "4-door" | "truck" | "full-suv";
type ConditionLevel = "none" | "light" | "moderate" | "heavy" | "severe" | "spot" | "multiple" | "mild" | "strong" | "yes";

interface QuoteData {
  // Step 1
  year: string;
  make: string;
  model: string;
  vehicleType: VehicleType | null;
  vehicleOptions: string[];
  
  // Step 2
  servicePackage: string;
  
  // Step 3
  petHair: ConditionLevel;
  odor: ConditionLevel;
  stains: ConditionLevel;
  dirt: ConditionLevel;
  kids: ConditionLevel;
  
  // Step 4
  addOns: string[];
  
  // Step 5
  serviceMode: "drop-off" | "mobile";
  mobileDistance: number;
  needsGenerator: boolean;
  address: string;
  zipCode: string;
  
  // Step 6
  preferredDate: Date | null;
  timeWindow: "am" | "pm";
  urgency: "flexible" | "soon" | "asap";
  
  // Step 7
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    year: "",
    make: "",
    model: "",
    vehicleType: null,
    vehicleOptions: [],
    servicePackage: "vip-both",
    petHair: "none",
    odor: "none",
    stains: "none",
    dirt: "none",
    kids: "none",
    addOns: [],
    serviceMode: "drop-off",
    mobileDistance: 0,
    needsGenerator: false,
    address: "",
    zipCode: "",
    preferredDate: null,
    timeWindow: "am",
    urgency: "flexible",
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  // Calculate pricing
  const calculateQuote = () => {
    if (!quoteData.vehicleType) return { subtotal: 0, timeEstimate: 0, breakdown: [] };

    const breakdown: Array<{ label: string; amount: number }> = [];
    let subtotal = 0;
    let timeEstimate = CONFIG.baseTimes[quoteData.vehicleType];

    // Base price
    const basePrice = CONFIG.basePrices[quoteData.vehicleType];
    breakdown.push({ label: `${quoteData.vehicleType.toUpperCase().replace('-', ' ')} Base Service`, amount: basePrice });
    subtotal += basePrice;

    // Vehicle options
    quoteData.vehicleOptions.forEach(optionId => {
      const option = CONFIG.vehicleOptions.find(o => o.id === optionId);
      if (option) {
        breakdown.push({ label: option.label, amount: option.price });
        subtotal += option.price;
        if (optionId === "oversized") timeEstimate += 0.5;
      }
    });

    // Condition surcharges
    const conditions = [
      { key: 'petHair', value: quoteData.petHair, label: 'Pet Hair' },
      { key: 'odor', value: quoteData.odor, label: 'Odor Treatment' },
      { key: 'stains', value: quoteData.stains, label: 'Stain Removal' },
      { key: 'dirt', value: quoteData.dirt, label: 'Heavy Dirt/Mud' },
      { key: 'kids', value: quoteData.kids, label: 'Kid Car Cleanup' }
    ];

    conditions.forEach(condition => {
      const pricing = CONFIG.conditionPricing[condition.key as keyof typeof CONFIG.conditionPricing];
      const amount = pricing[condition.value as keyof typeof pricing] || 0;
      if (amount > 0) {
        breakdown.push({ label: condition.label, amount });
        subtotal += amount;
        
        // Add time for conditions
        if (condition.value === "light") timeEstimate += CONFIG.conditionTimes.light;
        else if (condition.value === "moderate") timeEstimate += CONFIG.conditionTimes.moderate;
        else if (["heavy", "severe", "strong"].includes(condition.value)) timeEstimate += CONFIG.conditionTimes.heavy;
      }
    });

    // Add-ons
    quoteData.addOns.forEach(addOnId => {
      const addOn = CONFIG.addOns.find(a => a.id === addOnId);
      if (addOn && addOn.price > 0) {
        breakdown.push({ label: addOn.label, amount: addOn.price });
        subtotal += addOn.price;
        timeEstimate += addOn.time;
      }
    });

    // Mobile service
    if (quoteData.serviceMode === "mobile") {
      let mobileFee = CONFIG.mobileService.baseFee;
      if (quoteData.mobileDistance > CONFIG.mobileService.baseRadius) {
        const extraMiles = quoteData.mobileDistance - CONFIG.mobileService.baseRadius;
        mobileFee += extraMiles * CONFIG.mobileService.perMileRate;
      }
      breakdown.push({ label: "Mobile Service", amount: mobileFee });
      subtotal += mobileFee;

      if (quoteData.needsGenerator) {
        breakdown.push({ label: "Generator/Water Fee", amount: CONFIG.mobileService.generatorFee });
        subtotal += CONFIG.mobileService.generatorFee;
      }
    }

    return { subtotal, timeEstimate, breakdown };
  };

  const { subtotal, timeEstimate, breakdown } = calculateQuote();

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateQuoteData = (field: keyof QuoteData, value: any) => {
    setQuoteData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: keyof QuoteData, value: string) => {
    setQuoteData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }));
  };

  // Auto-suggest ozone treatment for strong odor
  useEffect(() => {
    if (quoteData.odor === "strong" && !quoteData.addOns.includes("ozone")) {
      setQuoteData(prev => ({ ...prev, addOns: [...prev.addOns, "ozone"] }));
    }
  }, [quoteData.odor]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">What do you drive?</h2>
              <p className="text-muted-foreground">Tell us about your ride so we can provide accurate pricing</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="year" className="font-display">Year</Label>
                <Input
                  id="year"
                  placeholder="2020"
                  value={quoteData.year}
                  onChange={(e) => updateQuoteData("year", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="make" className="font-display">Make</Label>
                <Input
                  id="make"
                  placeholder="Toyota"
                  value={quoteData.make}
                  onChange={(e) => updateQuoteData("make", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="model" className="font-display">Model</Label>
                <Input
                  id="model"
                  placeholder="Camry"
                  value={quoteData.model}
                  onChange={(e) => updateQuoteData("model", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="text-lg font-display mb-4 block">Vehicle Type</Label>
              <RadioGroup 
                value={quoteData.vehicleType || ""} 
                onValueChange={(value) => updateQuoteData("vehicleType", value as VehicleType)}
                className="grid md:grid-cols-2 gap-4"
              >
                {Object.entries(CONFIG.basePrices).map(([type, price]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                        <span className="font-display">{type.toUpperCase().replace('-', ' ')}</span>
                        <span className="font-bold text-primary">${price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-lg font-display mb-4 block">Vehicle Options</Label>
              <div className="space-y-3">
                {CONFIG.vehicleOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={option.id}
                      checked={quoteData.vehicleOptions.includes(option.id)}
                      onChange={() => toggleArrayItem("vehicleOptions", option.id)}
                      className="rounded"
                    />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span>{option.label}</span>
                        <span className="font-bold text-primary">+${option.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Which service are you interested in?</h2>
              <p className="text-muted-foreground">We offer comprehensive interior and exterior detailing</p>
            </div>

            <Card className="p-8 bg-gradient-card border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-4 font-display">VIP INTERIOR & EXTERIOR</h3>
              <p className="text-muted-foreground mb-6">
                Complete interior and exterior detailing package including deep steam clean, vacuum, shampoo, 
                leather/plastics conditioning, 2-bucket hand wash, paint sealant, tire shine, and glass cleaning.
              </p>
              <div className="text-4xl font-bold text-foreground font-display">
                ${quoteData.vehicleType ? CONFIG.basePrices[quoteData.vehicleType] : "---"}
              </div>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Help us gauge the effort</h2>
              <p className="text-muted-foreground">So we can quote accurately and allocate proper time</p>
            </div>

            <div className="space-y-6">
              {/* Pet Hair */}
              <div>
                <Label className="text-lg font-display mb-3 block">Any pet hair hiding in the carpets?</Label>
                <RadioGroup value={quoteData.petHair} onValueChange={(value) => updateQuoteData("petHair", value as ConditionLevel)}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Object.entries(CONFIG.conditionPricing.petHair).map(([level, price]) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`pet-${level}`} />
                        <Label htmlFor={`pet-${level}`} className="cursor-pointer text-sm">
                          {level.charAt(0).toUpperCase() + level.slice(1)} {price > 0 && `(+$${price})`}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Odor */}
              <div>
                <Label className="text-lg font-display mb-3 block">Any odors or smoke smell?</Label>
                <RadioGroup value={quoteData.odor} onValueChange={(value) => updateQuoteData("odor", value as ConditionLevel)}>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(CONFIG.conditionPricing.odor).map(([level, price]) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`odor-${level}`} />
                        <Label htmlFor={`odor-${level}`} className="cursor-pointer text-sm">
                          {level.charAt(0).toUpperCase() + level.slice(1)} {price > 0 && `(+$${price})`}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Stains */}
              <div>
                <Label className="text-lg font-display mb-3 block">Stains or soil level?</Label>
                <RadioGroup value={quoteData.stains} onValueChange={(value) => updateQuoteData("stains", value as ConditionLevel)}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Object.entries(CONFIG.conditionPricing.stains).map(([level, price]) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`stains-${level}`} />
                        <Label htmlFor={`stains-${level}`} className="cursor-pointer text-sm">
                          {level === "spot" ? "Spot/Small Area" : 
                           level === "multiple" ? "Multiple Areas" :
                           level === "severe" ? "Severe/Bio" :
                           level.charAt(0).toUpperCase() + level.slice(1)} {price > 0 && `(+$${price})`}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Dirt */}
              <div>
                <Label className="text-lg font-display mb-3 block">Sand, mud, or road salt?</Label>
                <RadioGroup value={quoteData.dirt} onValueChange={(value) => updateQuoteData("dirt", value as ConditionLevel)}>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(CONFIG.conditionPricing.dirt).map(([level, price]) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`dirt-${level}`} />
                        <Label htmlFor={`dirt-${level}`} className="cursor-pointer text-sm">
                          {level.charAt(0).toUpperCase() + level.slice(1)} {price > 0 && `(+$${price})`}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Kids */}
              <div>
                <Label className="text-lg font-display mb-3 block">Kids or spills (snacks, milk, car seats)?</Label>
                <RadioGroup value={quoteData.kids} onValueChange={(value) => updateQuoteData("kids", value as ConditionLevel)}>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(CONFIG.conditionPricing.kids).map(([level, price]) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`kids-${level}`} />
                        <Label htmlFor={`kids-${level}`} className="cursor-pointer text-sm">
                          {level === "yes" ? "Yes" : "None"} {price > 0 && `(+$${price})`}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
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

            <div className="grid md:grid-cols-2 gap-4">
              {CONFIG.addOns.map((addOn) => (
                <div key={addOn.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={addOn.id}
                    checked={quoteData.addOns.includes(addOn.id)}
                    onChange={() => toggleArrayItem("addOns", addOn.id)}
                    className="rounded"
                  />
                  <Label htmlFor={addOn.id} className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                      <div>
                        <span className="font-display">{addOn.label}</span>
                        {addOn.note && <p className="text-sm text-muted-foreground">{addOn.note}</p>}
                      </div>
                      {addOn.price > 0 && <span className="font-bold text-primary">+${addOn.price}</span>}
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">How do you want service?</h2>
              <p className="text-muted-foreground">Choose between drop-off or mobile service</p>
            </div>

            <RadioGroup value={quoteData.serviceMode} onValueChange={(value) => updateQuoteData("serviceMode", value)}>
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
                      <span className="font-bold text-primary">+$25+</span>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>

            {quoteData.serviceMode === "mobile" && (
              <div className="space-y-4 border-t pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="address" className="font-display">Service Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St, Denver, CO"
                      value={quoteData.address}
                      onChange={(e) => updateQuoteData("address", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="font-display">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="80202"
                      value={quoteData.zipCode}
                      onChange={(e) => updateQuoteData("zipCode", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="distance" className="font-display">Distance from shop (miles)</Label>
                  <Input
                    id="distance"
                    type="number"
                    placeholder="10"
                    value={quoteData.mobileDistance || ""}
                    onChange={(e) => updateQuoteData("mobileDistance", parseFloat(e.target.value) || 0)}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Within 10 miles: +$25 | Over 10 miles: +$25 + $1.50/mile
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="generator"
                    checked={quoteData.needsGenerator}
                    onChange={(e) => updateQuoteData("needsGenerator", e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="generator" className="cursor-pointer">
                    No water or power available? (+$15 generator/water fee)
                  </Label>
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">When would you like service?</h2>
              <p className="text-muted-foreground">Help us schedule your appointment</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="font-display mb-3 block">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !quoteData.preferredDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {quoteData.preferredDate ? format(quoteData.preferredDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={quoteData.preferredDate || undefined}
                      onSelect={(date) => updateQuoteData("preferredDate", date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="font-display mb-3 block">Time Window</Label>
                <RadioGroup value={quoteData.timeWindow} onValueChange={(value) => updateQuoteData("timeWindow", value)}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="am" id="am" />
                      <Label htmlFor="am" className="cursor-pointer">Morning (8 AM - 12 PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pm" id="pm" />
                      <Label htmlFor="pm" className="cursor-pointer">Afternoon (12 PM - 6 PM)</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="font-display mb-3 block">How soon do you need it?</Label>
                <RadioGroup value={quoteData.urgency} onValueChange={(value) => updateQuoteData("urgency", value)}>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="flexible" id="flexible" />
                      <Label htmlFor="flexible" className="cursor-pointer">Flexible</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="soon" id="soon" />
                      <Label htmlFor="soon" className="cursor-pointer">Soon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="asap" id="asap" />
                      <Label htmlFor="asap" className="cursor-pointer">ASAP</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-display font-semibold">Estimated Duration</span>
                </div>
                <p className="text-muted-foreground">
                  {timeEstimate.toFixed(1)} - {(timeEstimate + 1).toFixed(1)} hours
                </p>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Contact & Review</h2>
              <p className="text-muted-foreground">Finalize your quote and book your service</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display">Your Information</h3>
                
                <div>
                  <Label htmlFor="name" className="font-display">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={quoteData.name}
                    onChange={(e) => updateQuoteData("name", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-display">Phone *</Label>
                  <Input
                    id="phone"
                    placeholder="(303) 555-0123"
                    value={quoteData.phone}
                    onChange={(e) => updateQuoteData("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-display">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={quoteData.email}
                    onChange={(e) => updateQuoteData("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="font-display">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or additional information..."
                    value={quoteData.notes}
                    onChange={(e) => updateQuoteData("notes", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display">Quote Summary</h3>
                
                <Card className="p-6 bg-gradient-card">
                  <div className="space-y-3">
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{item.label}</span>
                        <span className="font-semibold">${item.amount}</span>
                      </div>
                    ))}
                    
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span className="font-display">Estimated Total:</span>
                        <span className="text-primary font-display">${subtotal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground space-y-1">
                    <p>• Final pricing subject to in-person inspection</p>
                    <p>• Biohazard (mold/bodily fluids) requires specialized service and pricing</p>
                    <p>• Quote valid for 14 days</p>
                  </div>
                </Card>

                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      // Handle quote submission
                      alert("Quote submitted! We'll contact you soon to confirm your appointment.");
                    }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Request Appointment
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Handle email quote
                      alert("Quote emailed to " + quoteData.email);
                    }}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email This Quote
                  </Button>
                </div>
              </div>
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
              {subtotal > 0 && (
                <div className="bg-primary/10 rounded-lg px-4 py-2">
                  <span className="text-sm text-muted-foreground">Current Total: </span>
                  <span className="font-bold text-primary font-display">${subtotal}</span>
                </div>
              )}
            </div>

            <Button 
              variant={currentStep === totalSteps ? "hero" : "default"}
              onClick={nextStep}
              disabled={currentStep === totalSteps || (currentStep === 1 && !quoteData.vehicleType)}
            >
              {currentStep === totalSteps ? "Complete Quote" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;