
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Car, Clock, Phone, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { submitQuote } from "@/lib/supabase";
import { toast } from "sonner";
import QuoteSuccess from "./QuoteSuccess";
import ServiceDetail from "./ServiceDetail";
import CeramicPaintLanding from "./CeramicPaintLanding";

type VehicleType = "2-door" | "4-door" | "mid-suv" | "wagon" | "truck" | "suv" | "heavy-duty" | "van" | "motorcycle";
type ServiceType = "interior-only" | "exterior-only" | "ceramic-coating" | "paint-correction";

const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [showServiceDetail, setShowServiceDetail] = useState(false);
  const [showDetailServices, setShowDetailServices] = useState(false);
  const [showCeramicPaintLanding, setShowCeramicPaintLanding] = useState(false);
  const [selectedDetailService, setSelectedDetailService] = useState<"ceramic-coating" | "paint-correction" | null>(null);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [serviceMode, setServiceMode] = useState<"drop-off" | "mobile">("drop-off");
  const [customerAddress, setCustomerAddress] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Shop address for distance calculations
  const shopAddress = "17284 E 102nd Place, Commerce City, CO 80022";

  const servicePrices = {
    "interior-only": {
      "2-door": 225,
      "4-door": 250,
      "mid-suv": 275,
      "wagon": 275,
      "truck": 275,
      "suv": 300,
      "heavy-duty": 275,
      "van": 300
    },
    "exterior-only": {
      "2-door": 75,
      "4-door": 100,
      "mid-suv": 110,
      "wagon": 110,
      "truck": 115,
      "suv": 125,
      "heavy-duty": 125,
      "van": 125,
      "motorcycle": 125
    },
    "restore-protect": {
      "2-door": 650,
      "4-door": 700,
      "mid-suv": 750,
      "wagon": 750,
      "truck": 850,
      "suv": 950,
      "heavy-duty": 1050,
      "van": 950,
      "motorcycle": 650
    }
  };

  const exteriorAddOns = [
    { id: "clay-bar", label: "Clay Bar", price: 25 },
    { id: "oversized", label: "Oversized/Lifted", price: 20 },
    { id: "bug-removal", label: "Bug Removal", price: 10 },
    { id: "engine-bay", label: "Engine Bay Detail", price: 30 },
    { id: "headlights", label: "Headlight Restoration", price: 100 }
  ];

  const interiorAddOns = [
    { id: "dog-hair", label: "Dog Hair Removal", price: 25 },
    { id: "smoke-odor", label: "Smoke Odor Removal", price: 50 }
  ];

  // Real distance calculation using Nominatim (OpenStreetMap) geocoding API
  const calculateDistance = async (address: string): Promise<number> => {
    if (!address.trim()) {
      return 0;
    }

    // Your shop coordinates (17284 E 102nd Place, Commerce City, CO 80022)
    const shopLat = 39.8631;
    const shopLng = -104.7918;

    try {
      // Use Nominatim API to get coordinates for customer address
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&countrycodes=us`
      );
      
      if (!response.ok) {
        throw new Error('Geocoding failed');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const customerLat = parseFloat(data[0].lat);
        const customerLng = parseFloat(data[0].lon);
        
        // Calculate distance using Haversine formula
        const distance = haversineDistance(shopLat, shopLng, customerLat, customerLng);
        
        // Round trip distance (double the one-way distance)
        const roundTripDistance = Math.round(distance * 2);
        
        console.log(`Distance calculation: ${address} -> ${distance.toFixed(1)} miles one-way, ${roundTripDistance} miles round-trip`);
        
        return roundTripDistance;
      } else {
        console.log('No geocoding results found for address:', address);
        return 25; // Default fallback distance
      }
    } catch (error) {
      console.error('Error calculating distance:', error);
      return 25; // Default fallback distance
    }
  };

  // Haversine formula for distance calculation between two points
  const haversineDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 3959; // Earth's radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (value: number) => value * Math.PI / 180;

  // Generate real-time address suggestions
  const generateAddressSuggestions = async (input: string): Promise<string[]> => {
    const inputLower = input.toLowerCase().trim();
    
    if (inputLower.length < 3) return [];
    
    // Simulate real address API with expanded Colorado database
    const addresses = [
      // Commerce City - very close
      "4880 West 102nd Place, Commerce City, CO 80022",
      "4890 West 102nd Place, Commerce City, CO 80022", 
      "4900 West 102nd Place, Commerce City, CO 80022",
      "10250 East 104th Avenue, Commerce City, CO 80022",
      "17200 East 102nd Place, Commerce City, CO 80022",
      "6200 East 102nd Avenue, Commerce City, CO 80022",
      "7500 Tower Road, Commerce City, CO 80022",
      "8000 Rosemary Street, Commerce City, CO 80022",
      
      // Thornton - close
      "12000 Washington Street, Thornton, CO 80241",
      "13600 Colorado Boulevard, Thornton, CO 80602", 
      "9500 Grant Street, Thornton, CO 80229",
      "10200 Huron Street, Thornton, CO 80260",
      "11500 York Street, Thornton, CO 80233",
      
      // Northglenn - close
      "11000 Washington Street, Northglenn, CO 80233",
      "1200 West 104th Avenue, Northglenn, CO 80234",
      "10500 Melody Drive, Northglenn, CO 80234",
      
      // Westminster - medium distance
      "7200 Sheridan Boulevard, Westminster, CO 80003",
      "8500 Wadsworth Boulevard, Westminster, CO 80031",
      "9200 Federal Boulevard, Westminster, CO 80031",
      "10500 Lowell Boulevard, Westminster, CO 80031",
      
      // Denver - farther
      "1234 Colfax Avenue, Denver, CO 80218",
      "5678 Federal Boulevard, Denver, CO 80221",
      "9012 Broadway, Denver, CO 80209",
      "2500 17th Street, Denver, CO 80211",
      "3000 Blake Street, Denver, CO 80205",
      "1500 Market Street, Denver, CO 80202",
      
      // Arvada - medium-far
      "6400 Wadsworth Boulevard, Arvada, CO 80003",
      "7800 Ralston Road, Arvada, CO 80002",
      "5200 Ward Road, Arvada, CO 80002",
      
      // Boulder - far
      "1234 Pearl Street, Boulder, CO 80302",
      "2800 Canyon Boulevard, Boulder, CO 80302",
      "5500 Arapahoe Avenue, Boulder, CO 80303",
      
      // Aurora - medium
      "14200 East Colfax Avenue, Aurora, CO 80011",
      "15000 East Hampden Avenue, Aurora, CO 80014",
      "1200 South Abilene Street, Aurora, CO 80012",
      
      // Lakewood - medium-far  
      "6000 West Colfax Avenue, Lakewood, CO 80214",
      "1200 South Wadsworth Boulevard, Lakewood, CO 80226",
      "8500 West Alameda Avenue, Lakewood, CO 80226",
      "2444 S Ellis St, Lakewood, CO 80228" // Specific address that was causing issue
    ];
    
    // Smart matching algorithm
    const matches = addresses.filter(address => {
      const addressLower = address.toLowerCase();
      
      // Direct substring match
      if (addressLower.includes(inputLower)) return true;
      
      // Split input into parts for flexible matching
      const inputParts = inputLower.split(/[\s,]+/).filter(part => part.length > 0);
      
      // Check if most input parts match
      let matchCount = 0;
      inputParts.forEach(part => {
        if (addressLower.includes(part)) matchCount++;
      });
      
      // Return true if majority of parts match
      return matchCount >= Math.ceil(inputParts.length * 0.6);
    });
    
    // Sort by relevance and proximity to shop
    return matches
      .sort((a, b) => {
        // Prioritize Commerce City addresses first
        const aCommerce = a.toLowerCase().includes('commerce city');
        const bCommerce = b.toLowerCase().includes('commerce city');
        if (aCommerce && !bCommerce) return -1;
        if (!aCommerce && bCommerce) return 1;
        
        // Then sort by how well they match the input
        const aStartsWithInput = a.toLowerCase().startsWith(inputLower);
        const bStartsWithInput = b.toLowerCase().startsWith(inputLower);
        if (aStartsWithInput && !bStartsWithInput) return -1;
        if (!aStartsWithInput && bStartsWithInput) return 1;
        
        return 0;
      })
      .slice(0, 10); // Show up to 10 suggestions
  };

  const calculateMobileFee = (distance: number) => {
    // $25 base fee covers up to 30 miles roundtrip
    if (distance <= 15) { // 15 miles one-way = 30 miles roundtrip
      return 25;
    }
    // $0.50 per mile after 30 miles roundtrip
    const extraMiles = (distance - 15) * 2; // Convert one-way to roundtrip
    return 25 + (extraMiles * 0.5);
  };

  useEffect(() => {
    if (serviceMode === "mobile" && customerAddress.trim().length > 1) {
      const timeoutId = setTimeout(async () => {
        try {
          // Calculate real distance
          const dist = await calculateDistance(customerAddress);
          setDistance(dist);
          
          // Generate address suggestions
          const suggestions = await generateAddressSuggestions(customerAddress);
          setAddressSuggestions(suggestions);
          setShowSuggestions(suggestions.length > 0);
        } catch (error) {
          console.error('Error calculating distance:', error);
          // Fallback to default distance
          setDistance(25);
          setAddressSuggestions([]);
          setShowSuggestions(false);
        }
      }, 300); // Slight delay for better UX
      
      return () => clearTimeout(timeoutId);
    } else {
      setDistance(null);
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  }, [customerAddress, serviceMode]);

  // Listen for navigation event from Services section
  useEffect(() => {
    const handleCeramicPaintNavigation = () => {
      setShowCeramicPaintLanding(true);
      setCurrentStep(1);
    };

    window.addEventListener('navigate-to-ceramic-paint', handleCeramicPaintNavigation);
    return () => window.removeEventListener('navigate-to-ceramic-paint', handleCeramicPaintNavigation);
  }, []);

  const totalSteps = 5; // Reduced from 6 to 5
  const progress = (currentStep / totalSteps) * 100;

  const calculateTotal = () => {
    let total = 0;
    
    if (vehicleType && selectedServices.length > 0) {
      selectedServices.forEach(serviceType => {
        total += servicePrices[serviceType][vehicleType] || 0;
      });
    }

    selectedAddOns.forEach(addOnId => {
      const exteriorAddOn = exteriorAddOns.find(a => a.id === addOnId);
      const interiorAddOn = interiorAddOns.find(a => a.id === addOnId);
      const addOn = exteriorAddOn || interiorAddOn;
      if (addOn) {
        // Apply 50% discount on interior detail if paired with ceramic-coating or paint-correction
        if ((selectedServices.includes("ceramic-coating") || selectedServices.includes("paint-correction")) && addOnId === "interior-detail") {
          total += addOn.price * 0.5;
        } else {
          total += addOn.price;
        }
      }
    });

    if (serviceMode === "mobile" && distance) {
      total += calculateMobileFee(distance);
    }

    return total;
  };

  const nextStep = async () => {
    // Validate vehicle info on step 1
    if (currentStep === 1) {
      if (!year.trim() || !make.trim() || !model.trim() || !vehicleType) {
        toast.error("Please complete all vehicle information", {
          description: "Year, Make, Model, and Vehicle Type are required to proceed."
        });
        return;
      }
    }
    
    if ((selectedServices.includes("ceramic-coating") || selectedServices.includes("paint-correction")) && currentStep === 2) {
      const ceramicService = selectedServices.includes("ceramic-coating") ? "ceramic-coating" : "paint-correction";
      setSelectedDetailService(ceramicService);
      setShowServiceDetail(true);
      return;
    }
    
    if (currentStep < totalSteps) {
      if (currentStep === 4 && serviceMode === "mobile" && customerAddress) {
        const dist = await calculateDistance(customerAddress);
        setDistance(dist);
      }
      setCurrentStep(currentStep + 1);
      
      // Keep the user focused on the quote wizard after step change
      setTimeout(() => {
        const element = document.getElementById('quote-wizard');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      
      // Keep the user focused on the quote wizard after step change
      setTimeout(() => {
        const element = document.getElementById('quote-wizard');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleDetailServicesClick = () => {
    if (year && make && model && vehicleType) {
      setShowCeramicPaintLanding(true);
    }
  };

  const handleServiceDetailContinue = (vehicleType: VehicleType, basePrice: number) => {
    setVehicleType(vehicleType);
    setShowServiceDetail(false);
    setCurrentStep(3);
    
    // Keep the user focused on the quote wizard
    setTimeout(() => {
      const element = document.getElementById('quote-wizard');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleServiceDetailBack = () => {
    setShowServiceDetail(false);
    setSelectedServices(prev => prev.filter(s => s !== "ceramic-coating" && s !== "paint-correction"));
    
    // Keep the user focused on the quote wizard
    setTimeout(() => {
      const element = document.getElementById('quote-wizard');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
                <Label htmlFor="year" className="font-display">Year *</Label>
                <Input
                  id="year"
                  placeholder="e.g. 2020"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={!year.trim() ? "border-destructive" : ""}
                />
              </div>
              <div>
                <Label htmlFor="make" className="font-display">Make *</Label>
                <Input
                  id="make"
                  placeholder="e.g. Toyota"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className={!make.trim() ? "border-destructive" : ""}
                />
              </div>
              <div>
                <Label htmlFor="model" className="font-display">Model *</Label>
                <Input
                  id="model"
                  placeholder="e.g. Camry"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className={!model.trim() ? "border-destructive" : ""}
                />
              </div>
            </div>

            <div>
              <Label className="text-lg font-display mb-4 block">Vehicle Type *</Label>
              <RadioGroup 
                value={vehicleType || ""} 
                onValueChange={(value) => setVehicleType(value as VehicleType)}
                className="grid md:grid-cols-2 gap-4"
              >
                {["2-door", "4-door", "mid-suv", "wagon", "truck", "suv", "heavy-duty", "van", "motorcycle"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50">
                        <span className="font-display">
                          {type === "2-door" ? "2 DOOR CAR" :
                           type === "4-door" ? "4 DOOR CAR / SMALL TRUCK" :
                            type === "mid-suv" ? "MID-SIZE SUV" :
                            type === "wagon" ? "WAGON" :
                            type === "truck" ? "TRUCK" :
                            type === "suv" ? "SUV" :
                            type === "heavy-duty" ? "HEAVY DUTY TRUCK" :
                            type === "van" ? "VAN" :
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
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Detail Type</h2>
              <p className="text-muted-foreground">Choose your service(s) - you can select multiple</p>
            </div>

            <div className="space-y-6">
              {/* Interior Service */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="interior-only" 
                    disabled={vehicleType === "motorcycle"}
                    checked={selectedServices.includes("interior-only")}
                    onCheckedChange={(checked) => {
                      if (vehicleType !== "motorcycle") {
                        if (checked) {
                          setSelectedServices(prev => [...prev, "interior-only"]);
                        } else {
                          setSelectedServices(prev => prev.filter(s => s !== "interior-only"));
                        }
                      }
                    }}
                  />
                  <Label htmlFor="interior-only" className={`text-xl font-bold font-display ${vehicleType === "motorcycle" ? "opacity-50 cursor-not-allowed" : ""}`}>VIP INTERIOR</Label>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mb-2">
                  Every inch of your interior is deep-cleaned — carpets shampooed, seats and upholstery steam-cleaned and shampooed, headliner refreshed, leather cleaned and conditioned, vents steamed, plastics and trim restored, and door jambs detailed. We don't just vacuum and wipe down — we detail your interior top to bottom.
                </p>
                <div className="ml-8 space-y-1 bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-base font-medium">2 DOOR CAR</span>
                    <span className="font-bold text-red-500">$225</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">4 DOOR CAR / SMALL TRUCK</span>
                    <span className="font-bold text-red-500">$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">MID-SIZE SUV / WAGON</span>
                    <span className="font-bold text-red-500">$275</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">TRUCK / HEAVY DUTY TRUCK</span>
                    <span className="font-bold text-red-500">$275</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">SUV / VAN</span>
                    <span className="font-bold text-red-500">$300</span>
                  </div>
                </div>
              </div>

              {/* Exterior Service */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="exterior-only" 
                    checked={selectedServices.includes("exterior-only")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedServices(prev => [...prev, "exterior-only"]);
                      } else {
                        setSelectedServices(prev => prev.filter(s => s !== "exterior-only"));
                      }
                    }}
                  />
                  <Label htmlFor="exterior-only" className="text-xl font-bold font-display">VIP EXTERIOR</Label>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mb-2">
                  Complete multi-stage wash including bug and tar removal, wheel faces, barrels, wells, and fender liners deep-cleaned, two-bucket hand wash. Tires dressed, trim renewed, and a 6-month professional paint sealant applied to paint and wheels for lasting protection and shine.
                </p>
                <div className="ml-8 space-y-1 bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-base font-medium">2 DOOR CAR</span>
                    <span className="font-bold text-red-500">$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">4 DOOR CAR / SMALL TRUCK</span>
                    <span className="font-bold text-red-500">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">MID-SIZE SUV / WAGON</span>
                    <span className="font-bold text-red-500">$110</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">TRUCK</span>
                    <span className="font-bold text-red-500">$115</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">SUV / HEAVY DUTY TRUCK / VAN</span>
                    <span className="font-bold text-red-500">$125</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium">MOTORCYCLE</span>
                    <span className="font-bold text-red-500">$125</span>
                  </div>
                </div>
              </div>

              {/* Ceramic Coating & Paint Correction */}
              <div className="space-y-2">
                <Button
                  onClick={handleDetailServicesClick}
                  disabled={!year || !make || !model || !vehicleType}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold cursor-pointer"
                >
                  CERAMIC COATING & PAINT CORRECTION
                </Button>
                <div className="text-sm text-muted-foreground italic mb-2">
                  Premium protection and restoration services
                </div>
                <div className="text-sm text-primary font-semibold">
                  Click to see details and request a quote
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
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
                        <span className="font-bold text-red-500">+${addOn.price}</span>
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
                        <span className="font-bold text-red-500">+${addOn.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
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
                      <span className="font-display">Mobile Service (Auto-calc distance)</span>
                      <span className="font-bold text-primary">Dynamic Fee</span>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>

            {serviceMode === "mobile" && (
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="address" className="font-display">Customer Address *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="Enter your address..."
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                {distance && (
                  <div className="bg-primary/10 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">
                      Distance: {distance} mi • Mobile Fee: ${calculateMobileFee(distance)}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 5:
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
                
                {/* Vehicle Details */}
                <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Vehicle Details</h4>
                  <p className="text-sm text-muted-foreground">
                    {year} {make} {model} {vehicleType && `(${vehicleType.replace('-', ' ').toUpperCase()})`}
                  </p>
                </div>

                {/* Service Details */}
                <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Services Selected</h4>
                   <p className="text-sm text-muted-foreground">
                     {selectedServices.length === 0 ? 'No services selected' :
                      selectedServices.map(service => 
                        service === 'interior-only' ? 'VIP Interior' :
                        service === 'exterior-only' ? 'VIP Exterior' :
                        service === 'ceramic-coating' ? 'Ceramic Coating' :
                        service === 'paint-correction' ? 'Paint Correction' : service
                      ).join(', ')}
                   </p>
                </div>

                <div className="space-y-3">
                  {selectedServices.map(serviceType => (
                    <div key={serviceType} className="flex justify-between items-center">
                      <span className="font-display">{serviceType === 'interior-only' ? 'VIP Interior' : 'VIP Exterior'}</span>
                      <span className="font-semibold text-red-500 font-display">${vehicleType ? servicePrices[serviceType][vehicleType] || 0 : 0}</span>
                    </div>
                  ))}

                    {selectedAddOns.map(addOnId => {
                      const exteriorAddOn = exteriorAddOns.find(a => a.id === addOnId);
                      const interiorAddOn = interiorAddOns.find(a => a.id === addOnId);
                      const addOn = exteriorAddOn || interiorAddOn;
                      return addOn ? (
                        <div key={addOnId} className="flex justify-between items-center text-sm">
                          <span>{addOn.label}</span>
                          {(selectedServices.includes("ceramic-coating") || selectedServices.includes("paint-correction")) && addOnId === "interior-detail" ? (
                            <div className="text-right">
                              <span className="text-muted-foreground line-through">${addOn.price}</span>
                              <span className="text-red-500 ml-2">+${addOn.price * 0.5}</span>
                              <div className="text-xs text-green-600">50% off</div>
                            </div>
                          ) : (
                            <span className="text-red-500">+${addOn.price}</span>
                          )}
                        </div>
                      ) : null;
                    })}

                  {serviceMode === "mobile" && distance && (
                    <div className="flex justify-between items-center text-sm">
                      <span>Mobile Service ({distance * 2} mi round trip)</span>
                      <span className="text-red-500">+${calculateMobileFee(distance)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-foreground font-display">Total:</span>
                      <span className="text-primary font-display">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={async () => {
                         try {
                           console.log("Starting quote submission...");
                           const quoteData = {
                             name,
                             email,
                             phone,
                             vehicle_year: year,
                             vehicle_make: make,
                             vehicle_model: model,
                             service_type: selectedServices.join(', '),
                             add_ons: selectedAddOns,
                             estimated_total: calculateTotal(),
                             additional_notes: serviceMode === 'mobile' ? `Mobile service to: ${customerAddress}` : 'Drop-off service'
                           };
                           console.log("Quote data:", quoteData);
                           
                            const result = await submitQuote(quoteData);
                            console.log("Quote submitted successfully:", result);
                            
                            setShowSuccess(true);
                         } catch (error) {
                           console.error("Error submitting quote:", error);
                           console.error("Error details:", JSON.stringify(error, null, 2));
                           toast.error("Failed to submit quote. Please try again or call us directly.");
                         }
                      }}
                    >
                      Submit Quote
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

  const resetQuoteWizard = () => {
    setCurrentStep(1);
    setVehicleType(null);
    setYear("");
    setMake("");
    setModel("");
    setSelectedServices([]);
    setSelectedAddOns([]);
    setServiceMode("drop-off");
    setName("");
    setEmail("");
    setPhone("");
    setCustomerAddress("");
    setShowSuccess(false);
  };

  if (showSuccess) {
    return <QuoteSuccess onStartOver={resetQuoteWizard} />;
  }

  if (showServiceDetail && selectedDetailService) {
    return <ServiceDetail 
      serviceType={selectedDetailService}
      onBack={handleServiceDetailBack}
      onContinue={handleServiceDetailContinue}
    />;
  }

  if (showDetailServices) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Detail Services
              </h1>
              <p className="text-muted-foreground text-lg">
                Choose from our premium ceramic coating and paint correction services
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary/50"
                onClick={() => {
                  setSelectedDetailService("ceramic-coating");
                  setShowDetailServices(false);
                  setShowServiceDetail(true);
                }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">Ceramic Coating</h3>
                <p className="text-muted-foreground mb-4">
                  Professional ceramic coating application for ultimate paint protection
                </p>
                <Button className="w-full">
                  Click to see details and request a quote
                </Button>
              </Card>

              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary/50"
                onClick={() => {
                  setSelectedDetailService("paint-correction");
                  setShowDetailServices(false);
                  setShowServiceDetail(true);
                }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">Paint Correction</h3>
                <p className="text-muted-foreground mb-4">
                  Multi-stage paint correction to remove swirls and restore paint clarity
                </p>
                <Button className="w-full">
                  Click to see details and request a quote
                </Button>
              </Card>

              <Card 
                className={`p-6 transition-all border-2 ${
                  vehicleType === "motorcycle" 
                    ? "opacity-50 cursor-not-allowed bg-muted/50" 
                    : "cursor-pointer hover:shadow-lg hover:border-primary/50"
                }`}
                onClick={() => {
                  if (vehicleType !== "motorcycle") {
                    setSelectedServices(["interior-only"]);
                    setCurrentStep(3);
                    setShowDetailServices(false);
                  }
                }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">Interior Detail</h3>
                <p className="text-muted-foreground mb-4">
                  Complete interior cleaning and conditioning service
                </p>
                <Button className="w-full">
                  Click to see details and request a quote
                </Button>
              </Card>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDetailServices(false)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Show Ceramic Coating & Paint Correction Landing Page
  if (showCeramicPaintLanding) {
    return (
      <section id="quote-wizard" className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <CeramicPaintLanding
            onBack={() => setShowCeramicPaintLanding(false)}
            onContact={() => {
              setShowCeramicPaintLanding(false);
              setCurrentStep(5); // Go to contact info step
            }}
          />
        </div>
      </section>
    );
  }

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
              {!selectedServices.includes("ceramic-coating") && !selectedServices.includes("paint-correction") && (
                <div className="bg-primary/10 rounded-lg px-4 py-2">
                  <span className="text-sm text-muted-foreground">Current Total: </span>
                  <span className="font-bold text-primary font-display">${calculateTotal()}</span>
                </div>
              )}
            </div>

            <Button 
              variant="default"
              onClick={nextStep}
              disabled={currentStep === totalSteps || (currentStep === 1 && !vehicleType) || (currentStep === 2 && (selectedServices.length === 0 || !year || !make || !model))}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;
