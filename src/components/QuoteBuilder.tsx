import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Bike, Phone } from "lucide-react";

type VehicleType = 'motorcycle' | '2-door' | '4-door-suv' | 'truck' | 'heavy-duty';
type ServiceType = 'vip-exterior' | 'vip-interior' | 'vip-both';
type AddOn = {
  id: string;
  name: string;
  price: number;
  category: 'exterior' | 'interior';
};

const QuoteBuilder = () => {
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const vehicleOptions = [
    { id: 'motorcycle', name: 'Motorcycle', icon: Bike },
    { id: '2-door', name: '2 Door Car', icon: Car },
    { id: '4-door-suv', name: '4 Door Car / Mid-Size SUV', icon: Car },
    { id: 'truck', name: 'Truck', icon: Truck },
    { id: 'heavy-duty', name: 'SUV / Heavy Duty Truck', icon: Truck },
  ];

  const serviceOptions = [
    { id: 'vip-exterior', name: 'VIP EXTERIOR', description: '2 Bucket Hand Wash, Paint Sealant, Tire Shine, Glass Cleaned' },
    { id: 'vip-interior', name: 'VIP INTERIOR', description: 'Deep Steam Clean, Vacuum, Shampoo, Leather/Plastics Conditioned' },
    { id: 'vip-both', name: 'VIP INTERIOR & EXTERIOR', description: 'Complete interior and exterior detailing package' },
  ];

  const addOns: AddOn[] = [
    // Exterior Add-ons
    { id: 'bug-removal', name: 'Bug Removal', price: 10, category: 'exterior' },
    { id: 'mud-removal', name: 'Mud Removal', price: 25, category: 'exterior' },
    { id: 'oversize-wheels', name: 'Oversize Wheels / Lifted Vehicles', price: 25, category: 'exterior' },
    { id: 'engine-bay', name: 'Engine Bay', price: 30, category: 'exterior' },
    { id: 'headlight-restoration', name: 'Headlight Restoration', price: 100, category: 'exterior' },
    { id: 'chrome-polish', name: 'Chrome Polish (Motorcycles)', price: 100, category: 'exterior' },
    { id: 'paint-polish', name: 'Paint Polish', price: 175, category: 'exterior' },
    { id: 'ceramic-coating', name: 'Ceramic Coating', price: 125, category: 'exterior' },
    // Interior Add-ons
    { id: 'work-truck', name: 'Work Truck', price: 50, category: 'interior' },
    { id: 'dog-hair-removal', name: 'Dog Hair Removal', price: 30, category: 'interior' },
    { id: 'kid-car', name: 'Kid Car', price: 50, category: 'interior' },
    { id: 'smoke-odor-removal', name: 'Smoke Odor Removal', price: 30, category: 'interior' },
  ];

  const getBasePrice = (): number => {
    if (!vehicleType || !serviceType) return 0;

    const prices: Record<ServiceType, Record<VehicleType, number>> = {
      'vip-exterior': {
        'motorcycle': 125,
        '2-door': 75,
        '4-door-suv': 100,
        'truck': 115,
        'heavy-duty': 125,
      },
      'vip-interior': {
        'motorcycle': 0, // Not applicable
        '2-door': 225,
        '4-door-suv': 250,
        'truck': 0, // Not available for trucks
        'heavy-duty': 275,
      },
      'vip-both': {
        'motorcycle': 0, // Not applicable
        '2-door': 300,
        '4-door-suv': 350,
        'truck': 390,
        'heavy-duty': 400,
      },
    };

    return prices[serviceType][vehicleType] || 0;
  };

  const getAvailableAddOns = (): AddOn[] => {
    if (!serviceType) return [];
    
    if (serviceType === 'vip-exterior') {
      return addOns.filter(addon => addon.category === 'exterior');
    } else if (serviceType === 'vip-interior') {
      return addOns.filter(addon => addon.category === 'interior');
    } else {
      return addOns; // VIP both can have all add-ons
    }
  };

  const getAddOnPrice = (): number => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
  };

  const getTotalPrice = (): number => {
    return getBasePrice() + getAddOnPrice();
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const resetQuote = () => {
    setStep(1);
    setVehicleType(null);
    setServiceType(null);
    setSelectedAddOns([]);
  };

  if (step === 1) {
    return (
      <section id="quote-builder" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
                BUILD YOUR QUOTE
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Select your vehicle type to get started
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleOptions.map((vehicle) => {
                const IconComponent = vehicle.icon;
                return (
                  <Card 
                    key={vehicle.id}
                    className="p-8 bg-gradient-card border-border hover:shadow-luxury transition-smooth cursor-pointer hover:scale-105"
                    onClick={() => {
                      setVehicleType(vehicle.id as VehicleType);
                      setStep(2);
                    }}
                  >
                    <div className="text-center">
                      <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground font-display">
                        {vehicle.name}
                      </h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step === 2) {
    const availableServices = serviceOptions.filter(service => {
      if (vehicleType === 'motorcycle') {
        return service.id === 'vip-exterior';
      }
      if (vehicleType === 'truck' && service.id === 'vip-interior') {
        return false; // Remove VIP Interior option for trucks
      }
      return true;
    });

    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
                SELECT SERVICE TYPE
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose your detail package for {vehicleOptions.find(v => v.id === vehicleType)?.name}
              </p>
            </div>

            {/* Pricing Table */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-luxury mb-8">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8 font-display">
                Service Pricing for {vehicleOptions.find(v => v.id === vehicleType)?.name}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-6 text-foreground font-display text-lg">Service</th>
                      <th className="text-center py-4 px-6 text-foreground font-display text-lg">Price</th>
                      <th className="text-center py-4 px-6 text-foreground font-display text-lg">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableServices.map((service) => {
                      const tempServiceType = service.id as ServiceType;
                      // Use the existing getBasePrice function by temporarily setting serviceType
                      const originalServiceType = serviceType;
                      const price = (() => {
                        const prices: Record<ServiceType, Record<VehicleType, number>> = {
                          'vip-exterior': {
                            'motorcycle': 100,
                            '2-door': 60,
                            '4-door-suv': 75,
                            'truck': 100,
                            'heavy-duty': 125,
                          },
                          'vip-interior': {
                            'motorcycle': 0,
                            '2-door': 250,
                            '4-door-suv': 250,
                            'truck': 0, // Not available for trucks
                            'heavy-duty': 275,
                          },
                          'vip-both': {
                            'motorcycle': 0,
                            '2-door': 275,
                            '4-door-suv': 300,
                            'truck': 325,
                            'heavy-duty': 350,
                          },
                        };
                        return prices[tempServiceType][vehicleType!] || 0;
                      })();

                      return (
                        <tr key={service.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="py-6 px-6">
                            <div>
                              <h4 className="text-lg font-bold text-foreground font-display mb-2">
                                {service.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-center">
                            <div className="text-3xl font-bold text-red-500 font-display">
                              ${price || 'N/A'}
                            </div>
                          </td>
                          <td className="py-6 px-6 text-center">
                            <Button 
                              variant="hero"
                              onClick={() => {
                                setServiceType(service.id as ServiceType);
                                setStep(3);
                              }}
                              className="px-8"
                            >
                              Select
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center">
              <Button variant="minimal" onClick={() => setStep(1)}>
                ← Back to Vehicle Selection
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step === 3) {
    const availableAddOns = getAvailableAddOns();
    
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
                ADD-ON SERVICES
              </h2>
              <p className="text-xl text-muted-foreground">
                Customize your detail with additional services
              </p>
            </div>

            {availableAddOns.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {availableAddOns.map((addOn) => (
                  <Card 
                    key={addOn.id}
                    className={`p-6 border-border cursor-pointer transition-smooth ${
                      selectedAddOns.includes(addOn.id) 
                        ? 'bg-primary/10 border-primary/50 shadow-glow' 
                        : 'bg-gradient-card hover:shadow-card'
                    }`}
                    onClick={() => toggleAddOn(addOn.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-foreground font-display">
                        {addOn.name}
                      </h4>
                      <span className="text-red-500 font-bold font-display">
                        +${addOn.price}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            <div className="bg-muted/30 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4 font-display">
                Your Quote
              </h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-muted-foreground">
                    {serviceOptions.find(s => s.id === serviceType)?.name}
                  </span>
                  <span className="text-red-500 font-semibold">
                    ${getBasePrice()}
                  </span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Add-ons</span>
                    <span className="text-red-500 font-semibold">
                      +${getAddOnPrice()}
                    </span>
                  </div>
                )}
                <div className="border-t border-border pt-2">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-foreground font-display">Total:</span>
                    <span className="text-red-500 font-display">${getTotalPrice()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setStep(4)}
                  className="w-full"
                >
                  Book Now
                </Button>
                <Button variant="minimal" onClick={resetQuote}>
                  Start Over
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Step 4 - Book Now
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-card rounded-2xl p-12 border border-border shadow-luxury">
            <Phone className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-foreground mb-6 font-display">
              Ready to Book?
            </h2>
            
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
                Your Quote Summary
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-semibold">
                    {vehicleOptions.find(v => v.id === vehicleType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-semibold">
                    {serviceOptions.find(s => s.id === serviceType)?.name}
                  </span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons:</span>
                    <span className="font-semibold">{selectedAddOns.length} selected</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 flex justify-between text-xl font-bold">
                  <span className="font-display">Total:</span>
                  <span className="text-red-500 font-display">${getTotalPrice()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground">
                Call or text to schedule your appointment
              </p>
              
              <div className="text-center">
                <a 
                  href="tel:+1234567890" 
                  className="inline-block bg-gradient-accent text-white px-8 py-4 rounded-lg text-2xl font-bold hover:scale-105 transition-smooth shadow-luxury font-display"
                >
                  (123) 456-7890
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Mobile service available throughout Denver Metro area.<br/>
                Additional mobile fee may apply based on location.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="minimal" onClick={resetQuote}>
                Build Another Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBuilder;