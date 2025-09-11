import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Sparkles, Shield, Palette } from "lucide-react";

interface CeramicPaintLandingProps {
  onBack: () => void;
  onContact: () => void;
}

const CeramicPaintLanding = ({ onBack, onContact }: CeramicPaintLandingProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="p-8 bg-gradient-card border-border">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Premium Protection & Enhancement Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional ceramic coating and paint correction services to protect and enhance your vehicle's finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Ceramic Coating Section */}
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Ceramic Coating</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Advanced nano-ceramic protection that bonds with your vehicle's paint to create a 
              durable, hydrophobic barrier. Provides years of protection against UV rays, 
              environmental contaminants, and minor scratches while enhancing gloss and shine.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                Long-lasting protection (2-7 years)
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                Enhanced gloss and depth
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                Hydrophobic water repelling
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                UV and chemical resistance
              </li>
            </ul>
          </div>

          {/* Paint Correction Section */}
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Paint Correction</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional paint restoration service that removes swirl marks, scratches, 
              oxidation, and other paint defects. Our multi-stage polishing process restores 
              your vehicle's paint to like-new condition with maximum clarity and depth.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-secondary mr-2" />
                Removes swirl marks and scratches
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-secondary mr-2" />
                Restores paint clarity and depth
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-secondary mr-2" />
                Eliminates oxidation and hazing
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-secondary mr-2" />
                Professional multi-stage process
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Notice */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-destructive mb-2">Custom Pricing</h4>
          <p className="text-muted-foreground">
            Every vehicle is unique, and our ceramic coating and paint correction services are 
            tailored to your specific needs. Pricing depends on your vehicle's size, condition, 
            and the level of service required. Contact us for a personalized quote based on 
            your vehicle and requirements.
          </p>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-accent text-white rounded-lg p-6 mb-8 text-center">
          <h4 className="text-xl font-bold mb-2">Special Offer!</h4>
          <p className="text-lg">
            Book your ceramic coating or paint correction service today and receive 50% off interior detail!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <Button 
            onClick={scrollToContact}
            variant="hero"
            className="px-8 py-3 text-lg"
          >
            Contact for Pricing
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CeramicPaintLanding;