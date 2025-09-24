import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";

interface QuoteSuccessProps {
  onStartOver: () => void;
}

const QuoteSuccess = ({ onStartOver }: QuoteSuccessProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="p-12 max-w-2xl mx-auto text-center bg-gradient-card border-border shadow-luxury">
        <div className="mb-8">
          <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6 font-display">
            Quote Submitted Successfully!
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Your Favorite Detailer will reach out to you with their soonest available openings. 
            Thanks for choosing us for your vehicle's care!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={onStartOver}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Submit Another Quote
          </Button>
          
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Us Now
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Need to make changes to your quote? Feel free to submit another one or call us directly.
        </p>
      </Card>
    </div>
  );
};

export default QuoteSuccess;